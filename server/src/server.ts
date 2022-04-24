import {registerNoteHandlers} from './packages/noteHandlers/noteHandlers';
import {MemoryStorage} from './packages/storage/storage';
import {Socket} from 'socket.io';
import {Express} from "express";
import {registerApiRoutes} from "./packages/api/apiRoutes";

const {Server} = require('socket.io');
const cors = require('cors');
const express = require('express');

const app: Express = express();
const port: number = 3999;
const memoryStorage = new MemoryStorage();

app.use(cors());
app.use(express.json());
registerApiRoutes(app, memoryStorage);

const io = new Server(app.listen(port, () => console.log('Server is started on: ', port)), {cors: '*'});
io.on('connection', (socket: Socket) => {
  const userName = socket.handshake.query.userName || null;
  console.log('Got connection from: ', userName);
  registerNoteHandlers(io, socket, memoryStorage);
});
