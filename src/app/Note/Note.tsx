import './Note.css';
import {center} from "../Utils/center";
import React, {Fragment, useState} from "react";

type NoteProps = {
  text: string,
  posX: number,
  posY: number,
  color: string,
  backgroundColor: string,
  userName: string,
  uuid: string,
  handleUpdateText: (uuid: string, newText: string) => void,
  handleUpdatePosition: (posX: number, posY: number, uuid: string) => void
};

export const Note = ({userName, text, posX, posY, color, backgroundColor, uuid, handleUpdateText, handleUpdatePosition}: NoteProps) => {
  const [noteText, setNoteText] = useState(text);
  const [editMode, setEditMode] = useState(false);

  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor
  }

  const handleMove = (event: any) => {
    const {posX, posY} = center(event.screenX, event.screenY);
    handleUpdatePosition(posX, posY, uuid);
  }

  const handleInput = (newText: string) => {
    setNoteText(newText);
  }

  const handleDisabeEditMode = () => {
    setEditMode(false);
    handleUpdateText(uuid, noteText);
  }

  return (
    <div draggable={true} style={noteStyle} className='note' onDragEnd={handleMove} data-testid="note">
      <h2>{userName}</h2>
      {editMode
        ? (
          <Fragment>
            <textarea defaultValue={noteText} onInput={(event: any) => handleInput(event.target.value)}/>
            <button onClick={() => setEditMode(false)}>Save</button>
          </Fragment>
        ) : (<div className="note-text" onClick={handleDisabeEditMode}>{noteText}</div>)}
    </div>
  );
};

