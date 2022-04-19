import { useSocketConnection } from './hooks/useSocketConnection';
import { Whiteboard } from './Whiteboard/Whiteboard';

export const WhiteboardApp = () => {
  const title = 'Whiteboard';
  const userName = 'Test user';

  useSocketConnection(userName);

  return <Whiteboard title={title} name={userName} />;
};
