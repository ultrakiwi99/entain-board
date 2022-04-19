"use strict";
exports.__esModule = true;
exports.registerNoteHandlers = void 0;
var roomName = 'common';
var broadcastMassUpdate = function (io, storage) {
    io.to(roomName).emit('updatedNotes', JSON.stringify(storage.getAllNotes()));
};
var registerNoteHandlers = function (io, socket, storage) {
    console.log('Joined socket: ', socket.id);
    socket.join(roomName);
    socket.on('updateNote', function (data) {
        storage.updateNote(data);
        broadcastMassUpdate(io, storage);
    });
    socket.on('createNote', function (data) {
        storage.createNote(data);
        broadcastMassUpdate(io, storage);
    });
};
exports.registerNoteHandlers = registerNoteHandlers;
