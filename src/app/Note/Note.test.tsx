import {fireEvent, render, screen, waitFor} from '@testing-library/react';
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
    render(<Note {...testNote} handleUpdateText={() => {}} handleUpdatePosition={() => {}}/>);

    const note = screen.getByTestId('note');

    expect(note).not.toBeNull();
    expect(note.style.backgroundColor).toBe(testNote.backgroundColor);
    expect(note.style.color).toBe(testNote.color);
  })


  it('renders with username and text when edit mode is off', () =>{
    render(<Note {...testNote} handleUpdateText={() => {}} handleUpdatePosition={() => {}}/>);

    expect(screen.getByText(testNote.userName)).not.toBeNull();
    expect(screen.getByText(testNote.text)).not.toBeNull();
  })

  it('renders textarea input when clicked on text container', async () => {
    render(<Note {...testNote} handleUpdateText={() => {}} handleUpdatePosition={() => {}}/>);

    const textContainer = screen.getByText(testNote.text);

    fireEvent.click(textContainer);

    await waitFor(() => expect(screen.getByRole('textbox')).not.toBeNull());
    await waitFor(() => expect(screen.getByRole('button')).not.toBeNull());
  });

  it('disables edit mode and updates text in card', async () => {
    render(<Note {...testNote} handleUpdateText={() => {}} handleUpdatePosition={() => {}}/>);

    const textContainer = screen.getByText(testNote.text);

    fireEvent.click(textContainer);

    await waitFor(async () => {
      const textInput = screen.getByRole('textbox');
      fireEvent.input(textInput, { target: {value: 'Some very new text'}});
      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        const textContainer = screen.getByText('Some very new text');
        expect(textContainer).not.toBeNull();
      });
    });
  });

  it('disables edit mode and calls handler with new text', async () => {
    render(<Note {...testNote} handleUpdateText={(uuid: string, newText: string) => {
      expect(newText).toBe('Some very new text');
      expect(uuid).toBe(testNote.uuid);
    }} handleUpdatePosition={() => {}}/>);

    const textContainer = screen.getByText(testNote.text);

    fireEvent.click(textContainer);

    await waitFor(async () => {
      const textInput = screen.getByRole('textbox');
      fireEvent.input(textInput, { target: {value: 'Some very new text'}});
      fireEvent.click(screen.getByRole('button'));
    });
  });
});
