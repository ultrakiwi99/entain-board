import {DBStorage, TextNote} from "../../types/types";

export class MemoryStorage implements DBStorage {
  notes: TextNote[] = [];
  users = new Set();

  getAllNotes(): TextNote[] {
    return [...this.notes];
  }

  addUser(name: string): void {
    this.users.add(name);
  }

  updateNotes(notes: TextNote[]) {
    this.notes = [...notes];
  }
}
