import React from 'react';
import { TextNote } from '../models';
import { Note } from '../Note/Note';
import './Whiteboard.css';
import {center} from "../Utils/center";
import { useNotes } from '../hooks/useNotes';

type WhiteboardProps = {
  title: string;
  name: string;
};

export const Whiteboard = ({ title, name }: WhiteboardProps) => {
  const { notes, addNode, updatePosition, updateText } = useNotes();
  const whiteboardStyle: React.CSSProperties = {
    position: 'relative',
  };

  const handleWhiteBoardClick = (event: any) => {
    if (event.target.id === 'whiteboard') {
      const { posX, posY } = center(event.clientX, event.clientY);
      addNode(posX, posY, name);
    }
  };

  return (
    <div
      data-testid="whiteboard"
      style={whiteboardStyle}
      onClick={(event: any) => handleWhiteBoardClick(event)}
      id="whiteboard"
    >
      <h1>{title}</h1>
      <section>{name}</section>
      {notes.map((note: TextNote) => (
        <Note
          {...note}
          key={note.uuid}
          handleUpdateText={updateText}
          handleUpdatePosition={updatePosition}
        />
      ))}
    </div>
  );
};
