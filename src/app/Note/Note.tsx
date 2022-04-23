import './Note.css';
import React, {Fragment, useState} from "react";
import {TextNote} from "../models";

type NoteProps = {
  note: TextNote;
  currentUser: string;
  handleUpdateText?: (uuid: string, newText: string) => void;
};

export const Note = ({note, currentUser, handleUpdateText}: NoteProps) => {
  const {posX, posY, color, backgroundColor, uuid, userName,text} = note;
  const [noteText, setNoteText] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const [moving, setMoving] = useState(false);

  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor,
    pointerEvents: userName === currentUser ? 'all' : 'none',
    opacity: userName === currentUser ? 1 : 0.8
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

  const handleEnableEditMode = () => {
    setEditMode(true);
  }

  const handlePointerDown = () => {
    setMoving(true);
    console.log('pointer down ', 'moving: ', moving);
  }

  const handlePointerUp = () => {
    setMoving(false);
    console.log('pointer up ', 'moving: ', moving);
  }

  return (
    <div style={noteStyle}
         className='note'
         data-testid="note"
         onPointerDown={handlePointerDown}
         onPointerUp={handlePointerUp}>
      <h2>{userName}</h2>
      {editMode
        ? (
          <Fragment>
            <textarea defaultValue={noteText} onInput={(event: any) => handleInput(event.target.value)}/>
            <button onClick={handleDisableEditMode}>Save</button>
          </Fragment>
        ) : (<div className="note-text" onClick={handleEnableEditMode}>{noteText}</div>)}
    </div>
  );
};

