import { registerNoteHandlers } from './packages/noteHandlers/noteHandlers';
import { MemoryStorage } from './packages/storage/storage';
import { Socket } from 'socket.io';

const { Server } = require('socket.io');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3999;

app.use(cors());

app.post('/login', () => {});

const httpServer = app.listen(port, () => {
  console.log(`Api server is running on ${port}.`);
});
const io = new Server(httpServer, {
  transports: ['websocket'],
  cors: '*',
});

const memoryStorage = new MemoryStorage();

io.on('connection', (socket: Socket) => {
  console.log('Got new connection');
  registerNoteHandlers(io, socket, memoryStorage);
});

io.listen(4000);
