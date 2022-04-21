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
    console.log('Joined socket: ', socket.id);
    socket.join(roomName);
    socket.on('updateNotes', function (data) {
        console.log('Got update notes event from ', socket.id);
        var notes = JSON.parse(data);
        storage.updateNotes(notes);
        broadcastMassUpdate(io, storage);
    });
    socket.on('disconnect', function () {
        console.log(socket.id, ' disconnected');
        socket.leave(roomName);
        socket.disconnect();
    });
};
exports.registerNoteHandlers = registerNoteHandlers;
