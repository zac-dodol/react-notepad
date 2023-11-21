import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: 1,
        title: "Sample Note",
        body: "This is a sample note.",
        favorite: false,
        color: "#ffffff",
      },
    ],
    selectedNoteId: 1,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      state.selectedNoteId = action.payload.id;
    },
    updateNote: (state, action) => {
      const { id } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    selectNote: (state, action) => {
      state.selectedNoteId = action.payload;
    },
  },
});

export const { addNote, updateNote, selectNote } = noteSlice.actions;
export default noteSlice.reducer;
