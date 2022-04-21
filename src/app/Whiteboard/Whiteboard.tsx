import React, {Fragment} from 'react';
import { TextNote } from '../models';
import { Note } from '../Note/Note';
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

export const Whiteboard = ({ title, name, logoff, notes, addNode, updatePosition, updateText }: WhiteboardProps) => {
  const handleWhiteBoardClick = (event: any) => {
    if (event.target.id === 'whiteboard') {
      const { posX, posY } = center(event.clientX, event.clientY);
      addNode(posX, posY, name);
    }
  };

  const otherNotes = notes.filter((note) => note.userName !== name);
  const myNotes = notes.filter((note) => note.userName === name);

  return (
    <div className="whiteboard-backdrop">
      <NotesList notes={otherNotes} name={name}/>
      <div
        data-testid="whiteboard"
        onClick={(event: any) => handleWhiteBoardClick(event)}
        id="whiteboard"
        className="whiteboard">
        <h1>{title}  <section>{name} <u onClick={logoff}>Logoff</u></section></h1>
        <NotesList notes={myNotes} name={name} updateText={updateText} updatePosition={updatePosition} />
      </div>
    </div>
  );
};

interface NoteListProps {
  notes: TextNote[];
  name: string;
  updateText?: (uuid: string, newText: string) => void;
  updatePosition?: (posX: number, posY: number, uuid: string) => void;
}

const NotesList = ({notes, name, updateText, updatePosition}: NoteListProps) => (
    <Fragment>
      { notes.map((note: TextNote) => (
      <Note
        currentUser={name}
        note={note}
        key={note.uuid}
        handleUpdateText={updateText}
        handleUpdatePosition={updatePosition}
      />))}
    </Fragment>
);
