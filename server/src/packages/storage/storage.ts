import {DBStorage, TextNote} from "../../types/types";

export class MemoryStorage implements DBStorage {
  notes: TextNote[] = [];
  users = new Set();

  createNote(note: TextNote): void {
    this.notes = [...this.notes, note];
  }

  getAllNotes(): TextNote[] {
    return [...this.notes];
  }

  updateNote(note: TextNote): void {
    this.notes = [...this.notes.map((next) => next.uuid === note.uuid ? note : next)];
  }

  addUser(name: string): void {
    this.users.add(name);
  }

  updateNotes(notes: TextNote[]) {
    this.notes = [...notes];
  }
}
