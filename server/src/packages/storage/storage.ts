import {DBStorage, TextNote} from "../../types/types";

export class MemoryStorage implements DBStorage {
  notes: TextNote[] = [];

  createNote(note: TextNote): void {
    this.notes = [...this.notes, note];
  }

  getAllNotes(): TextNote[] {
    return [...this.notes];
  }

  updateNote(note: TextNote): void {
    this.notes = [...this.notes.map((next) => next.uuid === note.uuid ? note : next)];
  }
}
