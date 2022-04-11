import { type } from '@testing-library/user-event/dist/types/setup/directApi';
import React from 'react';
import { TextNote } from '../models';
import { Note } from '../Note/Note';
import './Whiteboard.css';

type WhiteboardProps = {
  title: string, 
  name: string, 
  notes: TextNote[], 
  handleClick: (posX: number, posY: number) => void,
  handleNoteClick: (uuid: string) => void
};

export const Whiteboard = ({title, name, notes, handleClick, handleNoteClick}: WhiteboardProps) => {
  const whiteboardStyle: React.CSSProperties = {
    position: 'relative'
  }

  const handleWhiteBoardClick = (event: any) => {      
    if (event.target.id === 'whiteboard') {
      handleClick(event.clientX, event.clientY);
      handleNoteClick('');
    }
  }

  return (
    <div data-testid="whiteboard" style={whiteboardStyle} onClick={(event: any) => handleWhiteBoardClick(event)} id='whiteboard'>
      <h1>{title}</h1>
      <section>{name}</section>
      {notes.map((note: TextNote) => <Note {...note} key={note.uuid} handleClick={handleNoteClick}/>)}
    </div>
  );
}
