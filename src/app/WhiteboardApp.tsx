import { useState } from 'react';
import { TextNote } from './models';
import { randomColor } from './utils/randomColor';
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

  const enableEdit = (uuid: string) => {
    setNotes((notes) => ([...notes.map((note) => {
      note.editMode = uuid === note.uuid;
      return note;
    })]));
  }

  return (
    <Whiteboard title={title} name={userName} notes={notes} handleClick={addNode} handleNoteClick={enableEdit} />
  );
}