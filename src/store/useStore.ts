import { create } from "zustand";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteState {
  notes: Note[];
  setNote: (title: string | null, content: string | null) => void;
  addNote: (note: Note) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  notes: [],
  setNote: (title, content) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: Date.now(),
          title: title || "",
          content: content || "",
        },
      ],
    })),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
}));
