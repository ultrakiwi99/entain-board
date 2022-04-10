import './Note.css';

export const Note = ({text, posX, posY, color, backgroundColor}: {text: string, posX: number, posY: number, color: string, backgroundColor: string}) => {
  const noteStyle: React.CSSProperties = {
    position: 'absolute',
    top: posY,
    left: posX,
    color,
    backgroundColor
  }
  
  return (
    <div style={noteStyle} className='note'>{text}</div>
  );
};
