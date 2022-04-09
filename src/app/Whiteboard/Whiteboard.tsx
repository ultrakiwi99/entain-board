import React from 'react';
import { TextNote } from '../models';
import './Whiteboard.css';

const Note = ({text, posX, posY}: {text: string, posX: number, posY: number}) => {
  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX
  }
  
  return (
    <div style={noteStyle}>{text}</div>
  );
};

export const Whiteboard = ({title, name, notes, handleClick}: {title: string, name: string, notes: TextNote[], handleClick: (posX: number, posY: number) => void}) => {
  const whiteboardStyle: React.CSSProperties = {
    position: 'relative'
  }

  const handleWhiteBoardClick = (event: MouseEvent) => {
    console.log(event.screenX, event.screenY);
    
    handleClick(event.screenX, event.screenY);
  }

  return (
    <div data-testid="whiteboard" style={whiteboardStyle} onClick={(event: any) => handleWhiteBoardClick(event)}>
      <h1>{title}</h1>
      <section>{name}</section>
      {notes.map((note: TextNote) => <Note {...note} key={note.uuid}/>)}
    </div>
  );
}
