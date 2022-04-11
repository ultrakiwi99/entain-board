import { fireEvent, render, screen } from '@testing-library/react';
import { TextNote } from '../models';
import { Note } from './Note';

describe('TextNote', () => {
  const testNote: TextNote = {
    userName: 'Test user',
    text: 'Some text',
    posX: 0,
    posY: 0,
    uuid: '12345',
    color: 'black',
    backgroundColor: 'white',
    editMode: false
  };

  it('renders with passed color', () =>{
    render(<Note {...testNote} handleClick={() => {}}/>);

    const note = screen.getByText(testNote.text);

    expect(note).not.toBeNull();
    expect(note.style.backgroundColor).toBe(testNote.backgroundColor);
    expect(note.style.color).toBe(testNote.color);
  })


  it('renders with username and text when edit mode is off', () =>{
    render(<Note {...testNote} handleClick={() => {}}/>);

    expect(screen.getByText(testNote.userName)).not.toBeNull();
    expect(screen.getByText(testNote.text)).not.toBeNull();
  })

  it('renders with username and textarea when edit mode is on', () =>{
    render(<Note {...{...testNote, editMode: true}} handleClick={() => {}}/>);

    expect(screen.getByText(testNote.userName)).not.toBeNull();
    expect(screen.getByRole('textbox')).not.toBeNull();
  })


  it('passes note id on click', () => {
    expect.hasAssertions();
   
    render(<Note {...testNote} handleClick={(uid: string) => {
      expect(uid).toBe(testNote.uuid);
    }}/>);

    const note = screen.getByText(testNote.text);

    fireEvent.click(note, new MouseEvent('click'));
  })
});