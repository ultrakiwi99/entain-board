import React from 'react';
import {TextNote} from '../models';
import {Note} from '../Note/Note';
import './Whiteboard.css';
import {center} from "../Utils/center";

type WhiteboardProps = {
  title: string;
  name: string;
  logoff: () => void;
  notes: TextNote[];
  addNode: (posX: number, posY: number, userName: string) => void;
  updateText: (uuid: string, newText: string) => void;
  updatePosition: (posX: number, posY: number, uuid: string) => void;
};

export const Whiteboard = ({title, name, logoff, notes, addNode, updateText, updatePosition}: WhiteboardProps) => {
  const handleWhiteBoardClick = (event: any) => {
    if (event.target.id !== 'whiteboard') {
      return;
    }

    const {posX, posY} = center(event.clientX, event.clientY);
    addNode(posX, posY, name);
  };

  const otherNotes = notes.filter((note) => note.userName !== name);
  const myNotes = notes.filter((note) => note.userName === name);

  return (
    <div id="whiteboard-backdrop">
      {otherNotes.map((note: TextNote) => (
        <Note currentUser={name} note={note} key={note.uuid} handleUpdateText={updateText}/>
      ))}
      <div onClick={(event: any) => handleWhiteBoardClick(event)} id="whiteboard">
        <h1>{title}
          <section>{name} <u onClick={logoff}>Logoff</u></section>
        </h1>
        {myNotes.map((note: TextNote) => (
          <Note currentUser={name} note={note} key={note.uuid} handleUpdateText={updateText} handleUpdatePosition={updatePosition}/>
        ))}
      </div>
    </div>
  );
};
