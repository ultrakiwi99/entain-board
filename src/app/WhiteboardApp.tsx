import { useState } from 'react';
import { TextNote } from './models';
import { Whiteboard } from './Whiteboard/Whiteboard';

export const WhiteboardApp = () => {
  const title = "Whiteboard";
  const userName = 'Test user';
  const [notes, setNotes] = useState<TextNote[]>([]);

  const addNode = (posX: number, posY: number) => {
    setNotes((notes) => ([...notes, {
      userName,
      text: 'Empty note',
      posX,
      posY,
      uuid: Math.floor(Math.random() * 10000).toString(),
      color: 'red'
    }]))
  };

  return (
    <Whiteboard title={title} name={userName} notes={notes} handleClick={addNode} />
  );
}