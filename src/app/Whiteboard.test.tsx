import { render, screen } from '@testing-library/react';
import { Whiteboard } from './Whiteboard';

describe('Whiteboard', () => {
  it('renders', async () => {
    render(<Whiteboard />);

    expect(await screen.findByText('Entain test whiteboard')).not.toBeNull();
  })
});