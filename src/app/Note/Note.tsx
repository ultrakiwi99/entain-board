import './Note.css';
import React, {Fragment, useState} from "react";
import {TextNote} from "../models";

type NoteProps = {
  note: TextNote;
  currentUser: string;
  handleUpdateText?: (uuid: string, newText: string) => void;
};

export const Note = ({note, currentUser, handleUpdateText}: NoteProps) => {
  const {posX, posY, color, backgroundColor, uuid, userName, text} = note;
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

  let offsetX: number;
  let offsetY: number;

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

  const move = (event: any) => {
    const element = event.target;
    element.style.left = `${event.pageX - offsetX}px`
    element.style.top = `${event.pageY - offsetY}px`
  }

  const add = (event: any) => {
    const element = event.target;
    offsetX = event.clientX - element.getBoundingClientRect().left
    offsetY = event.clientY - element.getBoundingClientRect().top
    element.addEventListener('mousemove', move)
  }

  const remove = (event: any) => {
    const el = event.target;
    el.removeEventListener('mousemove', move)
  }

  return (
    <div style={noteStyle} className='note' data-testid="note" onMouseDown={add} onMouseUp={remove}>
      <h1>
        {userName}
        <button onClick={handleEnableEditMode} style={{pointerEvents: 'all'}}>...</button>
      </h1>
      {editMode
        ? (
          <Fragment>
            <textarea defaultValue={noteText} onInput={(event: any) => handleInput(event.target.value)}/>
            <button onClick={handleDisableEditMode}>Save</button>
          </Fragment>
        ) : (<div className="note-text">{noteText}</div>)}
    </div>
  );
};

