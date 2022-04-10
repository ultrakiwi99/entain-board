import './Note.css';

export const Note = ({text, posX, posY, color}: {text: string, posX: number, posY: number, color: string}) => {
  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    backgroundColor: color
  }
  
  return (
    <div style={noteStyle} className='note'>{text}</div>
  );
};
