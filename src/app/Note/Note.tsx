import './Note.css';
import {center} from "../Utils/center";
import React, {Fragment, useState} from "react";
import {TextNote} from "../models";

type NoteProps = {
  note: TextNote;
  currentUser: string;
  handleUpdateText?: (uuid: string, newText: string) => void,
  handleUpdatePosition?: (posX: number, posY: number, uuid: string) => void
};

export const Note = ({note, currentUser, handleUpdateText, handleUpdatePosition}: NoteProps) => {
  const {posX, posY, color, backgroundColor, uuid, userName,text} = note;
  const [noteText, setNoteText] = useState(text);
  const [editMode, setEditMode] = useState(false);

  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor,
    pointerEvents: userName === currentUser ? 'all' : 'none',
    opacity: userName === currentUser ? 1 : 0.8
  }

  const handleMove = (event: any) => {
    const {posX, posY} = center(event.screenX, event.screenY);
    if (handleUpdatePosition) {
      handleUpdatePosition(posX, posY, uuid);
    }
  }

  const handleInput = (newText: string) => {
    setNoteText(newText);
  }

  const handleDisableEditMode = () => {
    setEditMode(false);
    if (handleUpdateText) {
      handleUpdateText(uuid, noteText);
    }
  }

  return (
    <div draggable={true} style={noteStyle} className='note' onDragEnd={handleMove} data-testid="note">
      <h2>{userName}</h2>
      {editMode
        ? (
          <Fragment>
            <textarea defaultValue={noteText} onInput={(event: any) => handleInput(event.target.value)}/>
            <button onClick={() => handleDisableEditMode()}>Save</button>
          </Fragment>
        ) : (<div className="note-text" onClick={() => setEditMode(true)}>{noteText}</div>)}
    </div>
  );
};

