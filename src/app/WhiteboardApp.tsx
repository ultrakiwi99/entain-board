import { useState } from 'react';
import { TextNote } from './models';
import { randomColor } from './Utils/randomColor';
import { Whiteboard } from './Whiteboard/Whiteboard';

export const WhiteboardApp = () => {
  const title = "Whiteboard";
  const userName = 'Test user';
  const [notes, setNotes] = useState<TextNote[]>([]);

  const addNode = (posX: number, posY: number) => {
    const {backgroundColor, color} = randomColor();
    setNotes((notes) => ([...notes, {
      userName,
      text: 'Empty note',
      posX,
      posY,
      uuid: Math.floor(Math.random() * 10000).toString(),
      backgroundColor,
      color,
      editMode: false
    }]))
  };

  const updateText = (uuid: string, newText: string) => {
    setNotes((notes) => ([...notes.map((note) => {
      if (note.uuid === uuid) {
        note.text = newText;
      }
      return note;
    })]));
  }

  const updatePosition = (posX: number, posY: number, uuid: string) => {
    setNotes((notes) => ([...notes.map((note) => {
      if (note.uuid === uuid) {
        note.posX = posX;
        note.posY = posY;
      }
      return note;
    })]));
  }

  return (
    <Whiteboard
      title={title}
      name={userName}
      notes={notes}
      handleClick={addNode}
      handleUpdatePosition={updatePosition}
      handleTextUpdate={updateText}
    />
  );
}
