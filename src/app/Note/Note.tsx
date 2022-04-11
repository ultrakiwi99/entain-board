import './Note.css';

type NoteProps = {
  text: string, 
  posX: number, 
  posY: number, 
  color: string, 
  backgroundColor: string, 
  userName: string,
  uuid: string,
  editMode: boolean,
  handleClick: (uuid: string) => void
};

export const Note = ({userName, text, posX, posY, color, backgroundColor, uuid, editMode, handleClick}: NoteProps) => {
  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor
  }  

  return (
    <div style={noteStyle} className='note' onClick={() => handleClick(uuid)}>
      <h2>{userName}</h2>
      <div className='note-textarea'>
        {editMode ? <textarea autoFocus={true} /> : text}
      </div>
    </div>
  );
};

