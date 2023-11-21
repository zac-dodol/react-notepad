import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNote } from "../slices/noteSlice";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const selectedNoteId = useSelector((state) => state.notes.selectedNoteId);
  const dispatch = useDispatch();

  return (
    <div className="note-list h-100">
      <h1> Note Form </h1>

      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-item ${
            selectedNoteId === note.id ? "selected" : ""
          }`}
          onClick={() => dispatch(selectNote(note.id))}
        >
          {note.title}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
