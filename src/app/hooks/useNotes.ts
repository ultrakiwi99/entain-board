import {useEffect, useState} from 'react';
import { TextNote } from '../models';
import { randomColor } from '../Utils/randomColor';
import {useSocketConnection} from "./useSocketConnection";

export const useNotes = (name: string | null) => {
  const [notes, setNotes] = useState<TextNote[]>([]);
  const {connect, disconnect, sendNotes} = useSocketConnection((notes: TextNote[]) => setNotes(notes));

  useEffect(() => {
    if (name) {
      connect(name);
    } else {
      disconnect();
    }
  }, [name]);

  const addNode = (posX: number, posY: number, userName: string) => {
    const { backgroundColor, color } = randomColor();
    setNotes((notes) => {
      const newNotes = [...notes,
        {
          userName,
          text: 'Empty note',
          posX,
          posY,
          uuid: Math.floor(Math.random() * 10000).toString(),
          backgroundColor,
          color,
          editMode: false,
        },
      ];
      sendNotes(newNotes);
      return newNotes;
    });
  };

  const updateText = (uuid: string, newText: string) => {
    setNotes((notes) => {
      const newNotes = [
        ...notes.map((note) => {
          if (note.uuid === uuid) {
            note.text = newText;
          }
          return note;
        }),
      ];
      sendNotes(newNotes);
      return newNotes;
    });
  };

  const updatePosition = (posX: number, posY: number, uuid: string) => {
    // Ignore clicks on buttons edit and save.s
    if (!posX || !posY) {
      return;
    }
    setNotes((notes) => {
      const newNotes = [
        ...notes.map((note) => {
          if (note.uuid === uuid) {
            note.posX = posX;
            note.posY = posY;
          }
          return note;
        }),
      ];
      sendNotes(newNotes);
      return newNotes;
    });
  };

  return {
    notes,
    addNode,
    updatePosition,
    updateText,
  };
};
