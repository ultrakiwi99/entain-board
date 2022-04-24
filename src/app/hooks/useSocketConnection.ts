import {Socket} from "socket.io-client";
import {TextNote} from "../models";
import {useState} from "react";

const io = require('socket.io-client');

export const useSocketConnection = (updateNotes: (notes:TextNote[]) => void) => {
  const [client, setClient] = useState<Socket | null>(null);

  const connect = (userName: string) => {
    const client = io('http://localhost:3999', { query: { userName } });
      client.on('info', (data: any) => console.log(data));
      client.on('updateNotes', (data: any) => {
        try {
          const parsedNotes = JSON.parse(data);
          updateNotes(parsedNotes);
        } catch (error: any) {
          console.log('Update list event from server failed: ', error);
          updateNotes([]);
        }
      });
      setClient(client);
  }

  const disconnect = () => {
    if (client) {
      client.close();
      setClient(null);
    }
  }

  const sendNotes = (notes: TextNote[]) => {
    if (client) {
      client.emit('updateNotes', JSON.stringify(notes));
    }
  }

  return {connect, disconnect, sendNotes};
};
