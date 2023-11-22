import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote, selectNote } from "../slices/noteSlice";
import { ChromePicker } from "react-color";

const initialFormData = {
  title: "",
  body: "",
  favorite: false,
  color: "#ffffff",
};

const NoteForm = () => {
  const selectedNoteId = useSelector((state) => state.notes.selectedNoteId);
  const selectedNote = useSelector((state) =>
    state.notes.notes.find((note) => note.id === selectedNoteId)
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (selectedNote) {
      setFormData(selectedNote);
    } else {
      setFormData(initialFormData);
    }
  }, [selectedNote]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      color: color.hex,
    }));
  };

  const handleSaveNote = () => {
    if (selectedNote) {
      dispatch(updateNote(formData));
    } else {
      // If no note is selected, add a new note
      dispatch(addNote({ ...formData, id: Date.now() }));
    }
  };

  const handleNewNote = () => {
    dispatch(selectNote(null)); // Clear the selected note
  };

  return (
    <div className="note-form">
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />

      <label>Body:</label>
      <textarea
        name="body"
        value={formData.body}
        onChange={handleInputChange}
      />

      <label>
        Favorite:
        <input
          type="checkbox"
          name="favorite"
          checked={formData.favorite}
          onChange={handleInputChange}
        />
      </label>

      <label>Color:</label>
      <ChromePicker
        color={formData.color}
        onChangeComplete={(color) => handleColorChange(color)}
      />

      <div>
        <button onClick={handleSaveNote}>Save Note</button>
        <button onClick={handleNewNote}>New Note</button>
      </div>
    </div>
  );
};

export default NoteForm;
