"use strict";
exports.__esModule = true;
var noteHandlers_1 = require("./packages/noteHandlers/noteHandlers");
var storage_1 = require("./packages/storage/storage");
var Server = require('socket.io').Server;
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3999;
app.use(cors());
app.post('/login', function () { });
var httpServer = app.listen(port, function () {
    console.log("Api server is running on ".concat(port, "."));
});
var io = new Server(httpServer, {
    transports: ['websocket'],
    cors: '*'
});
var memoryStorage = new storage_1.MemoryStorage();
io.on('connection', function (socket) {
    console.log('Got new connection');
    (0, noteHandlers_1.registerNoteHandlers)(io, socket, memoryStorage);
});
io.listen(4000);
