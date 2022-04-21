import {Server, Socket} from "socket.io";
import {DBStorage, TextNote} from "../../types/types";

const roomName = 'common';

const broadcastMassUpdate = (io: Server, storage: DBStorage) => {
  const notes = storage.getAllNotes();
  console.log(notes);
  io.to(roomName).emit('updateNotes', JSON.stringify(storage.getAllNotes()));
}

export const registerNoteHandlers = (io: Server, socket: Socket, storage: DBStorage) => {
  console.log('Joined socket: ', socket.id);
  socket.join(roomName);
  socket.on('updateNotes', (data) => {
    console.log('Got update notes event from ', socket.id);
    const notes: TextNote[] = JSON.parse(data);
    storage.updateNotes(notes);
    broadcastMassUpdate(io, storage);
  });
  socket.on('disconnect', () => {
    console.log(socket.id, ' disconnected');
    socket.leave(roomName);
    socket.disconnect();
  })
}
