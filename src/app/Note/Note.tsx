import './Note.css';
import React, {Fragment, useState} from "react";
import {TextNote} from "../models";

type NoteProps = {
  note: TextNote;
  currentUser: string;
  handleUpdateText?: (uuid: string, newText: string) => void;
  handleUpdatePosition?: (posX: number, posY: number, uuid: string) => void;
};

export const Note = ({note, currentUser, handleUpdateText, handleUpdatePosition}: NoteProps) => {
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

  const disableEdit = () => {
    setEditMode(false);
    if (handleUpdateText) {
      handleUpdateText(uuid, noteText);
    }
  }

  const move = (event: any) => {
    const element = event.target;
    element.style.left = `${event.pageX - offsetX}px`;
    element.style.top = `${event.pageY - offsetY}px`;
  }

  const add = (event: any) => {
    const element = event.target;
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
    element.addEventListener('mousemove', move);
  }

  const remove = (event: any) => {
    const el = event.target;
    el.removeEventListener('mousemove', move);
    if (handleUpdatePosition) {
      handleUpdatePosition(el.style.left, el.style.top, uuid);
    }
  }

  return (
    <div style={noteStyle} className='note' data-testid="note" onMouseDown={add} onMouseUp={remove}>
      <h1>
        {userName}
        <button onClick={() => setEditMode(true)}>...</button>
      </h1>
      <NoteTextView
        noteText={text}
        editMode={editMode}
        handleInput={handleInput}
        disableEdit={disableEdit}/>
    </div>
  );
};

interface NoteTextView {
  noteText: string,
  editMode: boolean,
  handleInput: (newText: string) => void,
  disableEdit: () => void
}

const NoteTextView = ({noteText, handleInput, editMode, disableEdit}: NoteTextView) => editMode
  ? <Fragment>
      <textarea defaultValue={noteText} onInput={(event: any) => handleInput(event.target.value)}/>
      <button onClick={disableEdit}>Save</button>
    </Fragment>
  : <div className="note-text">{noteText}</div>;

