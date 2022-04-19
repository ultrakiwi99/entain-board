"use strict";
exports.__esModule = true;
var noteHandlers_1 = require("./packages/noteHandlers/noteHandlers");
var storage_1 = require("./packages/storage/storage");
var Server = require('socket.io').Server;
var express = require('express');
var app = express();
var port = 3999;
var memoryStorage = new storage_1.MemoryStorage();
app.post('/login', function () {
    console.log('Got login call');
});
var server = app.listen(port, function () {
    console.log('Api server is listening on port: ', port);
});
var io = new Server(server, { cors: '*' });
io.on('connection', function (socket) {
    var userName = socket.handshake.query.userName || null;
    console.log('Got connection from: ', userName);
    (0, noteHandlers_1.registerNoteHandlers)(io, socket, memoryStorage);
});
