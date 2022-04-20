import { registerNoteHandlers } from './packages/noteHandlers/noteHandlers';
import { MemoryStorage } from './packages/storage/storage';
import { Socket } from 'socket.io';
import {Request, Response} from "express";

const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3999;
const memoryStorage = new MemoryStorage();

app.use(cors());
app.use(express.json());

app.post('/login', async (req: Request, res: Response) => {
  const {name} = req.body;
  if (name) {
    memoryStorage.addUser(name);
    res.status(200);
  } else {
    res.status(400);
  }

  res.end();
});

const server = app.listen(port, () => {
  console.log('Api server is listening on port: ', port);
});

const io = new Server(server, { cors: '*' });

io.on('connection', (socket: Socket) => {
  const userName = socket.handshake.query.userName || null;
  console.log('Got connection from: ', userName);


  registerNoteHandlers(io, socket, memoryStorage);
});
