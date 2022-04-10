import { render, screen } from '@testing-library/react';
import { TextNote } from '../models';
import { Note } from './Note';

describe('TextNote', () => {
  const testNote: TextNote = {
    userName: 'Test user',
    text: 'Some text',
    posX: 0,
    posY: 0,
    uuid: '12345',
    color: 'red'
  };

  it('renders with passed color', () =>{
    render(<Note {...testNote}/>);

    const note = screen.getByText(testNote.text);

    expect(note).not.toBeNull();
    expect(note.style.backgroundColor).toBe(testNote.color);
  })
});