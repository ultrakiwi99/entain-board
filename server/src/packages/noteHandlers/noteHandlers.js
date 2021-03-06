"use strict";
exports.__esModule = true;
exports.registerNoteHandlers = void 0;
var roomName = 'common';
var broadcastMassUpdate = function (io, storage) {
    var notes = storage.getAllNotes();
    console.log(notes);
    io.to(roomName).emit('updateNotes', JSON.stringify(storage.getAllNotes()));
};
var registerNoteHandlers = function (io, socket, storage) {
    socket.on('updateNotes', function (data) {
        console.log('Got update notes event from ', socket.id);
        var notes = JSON.parse(data);
        storage.updateNotes(notes);
        broadcastMassUpdate(io, storage);
    });
    socket.on('disconnect', function () {
        socket.leave(roomName);
        socket.disconnect();
    });
    socket.emit('updateNotes', JSON.stringify(storage.getAllNotes()));
    socket.join(roomName);
};
exports.registerNoteHandlers = registerNoteHandlers;
