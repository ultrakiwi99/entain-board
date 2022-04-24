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
  updateNotes(notes: TextNote[]): void;
  getAllNotes(): TextNote[];
  addUser(name: string): void;
}
