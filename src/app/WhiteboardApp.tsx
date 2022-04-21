import {Whiteboard} from './Whiteboard/Whiteboard';
import {useState} from "react";
import {LoginForm} from "./Login/LoginForm";
import {useNotes} from "./hooks/useNotes";

export const WhiteboardApp = () => {
  const title = 'Whiteboard';
  const [userName, setUserName] = useState<string | null>(null);
  const {notes, addNode, updateText, updatePosition} = useNotes(userName);

  if (!userName) {
    return <LoginForm updateName={(name: string) => setUserName(name)}/>;
  }

  return <Whiteboard
    title={title}
    name={userName}
    logoff={() => setUserName(null)}
    notes={notes}
    addNode={addNode}
    updatePosition={updatePosition}
    updateText={updateText}
  />;
};
