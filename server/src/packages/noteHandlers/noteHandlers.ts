import {Server, Socket} from "socket.io";
import {DBStorage, TextNote} from "../../types/types";

const roomName = 'common';

const broadcastMassUpdate = (io: Server, storage: DBStorage) => {
  io.to(roomName).emit('updatedNotes', JSON.stringify(storage.getAllNotes()));
}

export const registerNoteHandlers = (io: Server, socket: Socket, storage: DBStorage) => {
  console.log('Joined socket: ', socket.id);
  

  socket.join(roomName);

  socket.on('updateNote', (data) => {
    storage.updateNote(data as TextNote);
    broadcastMassUpdate(io, storage);
  });

  socket.on('createNote', (data) => {
    storage.createNote(data as TextNote);
    broadcastMassUpdate(io, storage);
  });
}
