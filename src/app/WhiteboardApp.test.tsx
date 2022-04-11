import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { WhiteboardApp } from './WhiteboardApp';

describe('WhiteboardApp', () => {
  it('renders whiteboad', () => {
    render(<WhiteboardApp />);
    expect(screen.getByTestId('whiteboard')).not.toBeNull();
  });

  it('adds note to whiteboard on click', async () => {
    expect.hasAssertions();
    
    render(<WhiteboardApp />);

    const whiteboard = screen.getByTestId('whiteboard');

    fireEvent.click(whiteboard, new MouseEvent('click'))

    await waitFor(() => {
      expect(screen.getByText('Empty note')).not.toBeNull();
    });
  });

  it('enables edit mode on clicked note and disables on other notes', async () => {
    expect.hasAssertions();
    
    render(<WhiteboardApp />);

    const whiteboard = screen.getByTestId('whiteboard');

    fireEvent.click(whiteboard, new MouseEvent('click'))

    await waitFor(() => {
      expect(screen.getByText('Empty note')).not.toBeNull();
    });

    const note = screen.getByText('Empty note');

    fireEvent.click(note, new MouseEvent('click'))

    await waitFor(() => {
      expect(screen.getByRole('textbox')).not.toBeNull();
    });
  });
});