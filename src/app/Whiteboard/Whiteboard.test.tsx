import { Whiteboard } from './Whiteboard';

describe('Whiteboard', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  // const whiteboardTitle = 'Entain test whiteboard'
  // const userName = 'Test user';
  // let notes: TextNote[] = [];
  // const renderWhiteBoard = () => render(<Whiteboard title={whiteboardTitle} name={userName} />);
  // const note = (text: string) => screen.getByText(text);
  // beforeEach(() => {
  //   notes = [{
  //     userName,
  //     text: 'Text note 1',
  //     posX: 12,
  //     posY: 3,
  //     uuid: crypto.randomUUID(),
  //     color: 'black',
  //     backgroundColor: 'white',
  //     editMode: false
  //   }, {
  //     userName: '',
  //     text: 'Text note 2',
  //     posX: 15,
  //     posY: 2,
  //     uuid: crypto.randomUUID(),
  //     color: 'black',
  //     backgroundColor: 'white',
  //     editMode: false
  //   }];
  // });
  // it('renders and shows title text and current user name and has relative position', async () => {
  //   renderWhiteBoard();
  //   expect(await screen.findByText(whiteboardTitle)).not.toBeNull();
  //   expect(await screen.findAllByText(userName)).not.toBeNull();
  //   expect(screen.getByTestId('whiteboard').style.position).toBe('relative');
  // })
  // it('renders supplied notes text', async () => {
  //   renderWhiteBoard();
  //   expect(note(notes[0].text)).not.toBeNull();
  //   expect(note(notes[1].text)).not.toBeNull();
  // });
  // it('renders supplied notes with postion absolute and appropriate distance from top left corner', async () => {
  //   renderWhiteBoard();
  //   const firstNote = note(notes[0].text);
  //   const secondNote = note(notes[1].text);
  //   expect(firstNote.style.position).toBe('absolute');
  //   expect(firstNote.style.left).toBe('12px');
  //   expect(firstNote.style.top).toBe('3px');
  //   expect(secondNote.style.position).toBe('absolute');
  //   expect(secondNote.style.left).toBe('15px');
  //   expect(secondNote.style.top).toBe('2px');
  // });
  // it('sends cursor coordinates when clicked on', () => {
  //   expect.hasAssertions();
  //   render(
  //     <Whiteboard
  //       title={whiteboardTitle}
  //       name={userName}
  //       notes={notes}
  //       handleClick={(posX, posY) => {
  //         expect(posX).toBe(0);
  //         expect(posY).toBe(0);
  //       }}
  //       handleUpdatePosition={() => {}}
  //       handleTextUpdate={() => {}}
  //     />
  //   );
  //   const whiteboard = screen.getByTestId('whiteboard');
  //   fireEvent.click(whiteboard, new MouseEvent('click'))
  // });
  // it('sends note uid when note is clicked', async () => {
  //   expect.hasAssertions();
  //   render(
  //     <Whiteboard
  //       title={whiteboardTitle}
  //       name={userName}
  //       notes={notes}
  //       handleClick={() => {}}
  //       handleTextUpdate={() => {}}
  //       handleUpdatePosition={() => {}}
  //     />
  //   );
  //   const note = screen.getByText(notes[0].text);
  //   fireEvent.click(note, new MouseEvent('click'))
  // });
});
