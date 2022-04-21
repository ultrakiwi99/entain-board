"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MemoryStorage = void 0;
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.notes = [];
        this.users = new Set();
    }
    MemoryStorage.prototype.createNote = function (note) {
        this.notes = __spreadArray(__spreadArray([], this.notes, true), [note], false);
    };
    MemoryStorage.prototype.getAllNotes = function () {
        return __spreadArray([], this.notes, true);
    };
    MemoryStorage.prototype.updateNote = function (note) {
        this.notes = __spreadArray([], this.notes.map(function (next) { return next.uuid === note.uuid ? note : next; }), true);
    };
    MemoryStorage.prototype.addUser = function (name) {
        this.users.add(name);
    };
    MemoryStorage.prototype.updateNotes = function (notes) {
        this.notes = __spreadArray([], notes, true);
    };
    return MemoryStorage;
}());
exports.MemoryStorage = MemoryStorage;
