import { Whiteboard } from './Whiteboard/Whiteboard';
import {useState} from "react";
import {LoginForm} from "./Login/LoginForm";

export const WhiteboardApp = () => {
  const title = 'Whiteboard';
  const [userName, setUserName] = useState<string | null>(null);
  // const client = useSocketConnection();
  //
  // useEffect(() => {
  //   if (userName) {
  //     useSocketConnection(userName);
  //   }
  // }, [userName]);

  if (!userName) {
    return <LoginForm updateName={(name: string) => setUserName(name)} />;
  }

  return <Whiteboard title={title} name={userName} logoff={() => setUserName(null)} />;
};
