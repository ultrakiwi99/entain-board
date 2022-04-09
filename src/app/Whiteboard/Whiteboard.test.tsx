import { render, screen, fireEvent } from '@testing-library/react';
import { TextNote } from '../models';
import { Whiteboard } from './Whiteboard';
import crypto from 'crypto';

describe('Whiteboard', () => {
  const whiteboardTitle = 'Entain test whiteboard'
  const userName = 'Test user';
  const notes: TextNote[] = [{
    userName,
    text: 'Text note 1',
    posX: 12,
    posY: 3,
    uuid: crypto.randomUUID()
  }, {
    userName: '',
    text: 'Text note 2',
    posX: 15,
    posY: 2,
    uuid: crypto.randomUUID()
  }];

  const renderWhiteBoard = () => render(<Whiteboard title={whiteboardTitle} name={userName} notes={notes} handleClick={() => {}}/>);


  const note = (text: string) => screen.getByText(text);

  it('renders and shows title text and current user name and has relative position', async () => {
    renderWhiteBoard();
    expect(await screen.findByText(whiteboardTitle)).not.toBeNull();
    expect(await screen.findByText(userName)).not.toBeNull();
    expect(screen.getByTestId('whiteboard').style.position).toBe('relative');
  })

  it('renders supplied notes text', async () => {
    renderWhiteBoard();    
    expect(note(notes[0].text)).not.toBeNull();
    expect(note(notes[1].text)).not.toBeNull();
  });

  it('renders supplied notes with postion absolute and appropriate distance from top left corner', async () => {
    renderWhiteBoard();
    
    const firstNote = note(notes[0].text);
    const secondNote = note(notes[1].text);

    expect(firstNote.style.position).toBe('absolute');
    expect(firstNote.style.left).toBe('12px');
    expect(firstNote.style.top).toBe('3px');

    expect(secondNote.style.position).toBe('absolute');
    expect(secondNote.style.left).toBe('15px');
    expect(secondNote.style.top).toBe('2px');
  });

  it('sends cursor coordinates when clicked on', () => {
    expect.hasAssertions();

    render(<Whiteboard title={whiteboardTitle} name={userName} notes={notes} handleClick={(posX, posY) => {
      expect(posX).toBe(0);
      expect(posY).toBe(0);
    }}/>);

    const whiteboard = screen.getByTestId('whiteboard');

    fireEvent.click(whiteboard, new MouseEvent('click'))
  });
});