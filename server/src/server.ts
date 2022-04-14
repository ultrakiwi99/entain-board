import {Socket} from "socket.io";
import {registerNoteHandlers} from "./packages/noteHandlers/noteHandlers";
import {MemoryStorage} from "./packages/storage/storage";

const express = require('express');
const app = express();
const port = 3999;

app.post('/login', () => {});

const httpServer = app.listen(port, () => {console.log(`Api server is running on ${port}.`)});
const io = require("socket.io")(httpServer);

const memoryStorage = new MemoryStorage();

io.on('connection', (socket: Socket) => {
  registerNoteHandlers(io, socket, memoryStorage);
})
