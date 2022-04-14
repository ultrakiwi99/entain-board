export type TextNote = {
  userName: string;
  text: string;
  posX: number;
  posY: number;
  uuid: string;
  color: string;
  backgroundColor: string;
  editMode: boolean;
};

export interface DBStorage {
  updateNote(note: TextNote): void;
  createNote(note: TextNote): void;
  getAllNotes(): TextNote[];
}
