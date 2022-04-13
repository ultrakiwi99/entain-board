import React from 'react';
import { TextNote } from '../models';
import { Note } from '../Note/Note';
import './Whiteboard.css';
import {center} from "../Utils/center";

type WhiteboardProps = {
  title: string,
  name: string,
  notes: TextNote[],
  handleClick: (posX: number, posY: number) => void,
  handleNoteClick: (uuid: string) => void,
  handleTextInput: (newText: string, uuid: string) => void,
  handleUpdatePosition: (posX: number, posY: number, uuid: string) => void
};

export const Whiteboard = ({title, name, notes, handleClick, handleNoteClick, handleTextInput, handleUpdatePosition}: WhiteboardProps) => {
  const whiteboardStyle: React.CSSProperties = {
    position: 'relative'
  }

  const handleWhiteBoardClick = (event: any) => {
    if (event.target.id === 'whiteboard') {
      const {posX, posY} = center(event.clientX, event.clientY);
      handleClick(posX, posY);
      handleNoteClick('');
    }
  }

  return (
    <div data-testid="whiteboard" style={whiteboardStyle} onClick={(event: any) => handleWhiteBoardClick(event)} id='whiteboard'>
      <h1>{title}</h1>
      <section>{name}</section>
      {notes.map((note: TextNote) => <Note
        {...note}
        key={note.uuid}
        handleClick={handleNoteClick}
        handleInput={handleTextInput}
        handleUpdatePosition={handleUpdatePosition}
        />
      )}
    </div>
  );
}
