import './Note.css';
import {center} from "../Utils/center";
import React from "react";

type NoteProps = {
  text: string,
  posX: number,
  posY: number,
  color: string,
  backgroundColor: string,
  userName: string,
  uuid: string,
  editMode: boolean,
  handleClick: (uuid: string) => void,
  handleInput: (newText: string, uuid: string) => void,
  handleUpdatePosition: (posX: number, posY: number, uuid: string) => void
};

export const Note = ({ userName,
                       text,
                       posX,
                       posY,
                       color,
                       backgroundColor,
                       uuid,
                       editMode,
                       handleClick,
                       handleInput,
                       handleUpdatePosition
                     }: NoteProps) => {
  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor
  }

  const handleMove = (event: any) => {
    const {posX, posY} = center(event.clientX, event.clientY);
    handleUpdatePosition(posX, posY, uuid);
  }

  return (
    <div
      draggable={true}
      style={noteStyle}
      className='note'
      onDragEnd={handleMove}
      onClick={() => handleClick(uuid)}>
      <h2>{userName}</h2>
      {editMode ? (<textarea autoFocus={true} onInput={(event: any) => handleInput(event.target.value, uuid)}
                             defaultValue={text}/>) : text}
    </div>
  );
};

