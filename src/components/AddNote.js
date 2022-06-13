import React from 'react'
import { useState } from 'react';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleAddClick = () => {
    handleAddNote(noteText);//pass text typed when click to add
  }
  return (
    <div className="app-control">
      <button
        className="add-btn"
        onClick={handleAddClick}
      >+ New Note
      </button>
      <div className="note new">
        <textarea
          cols="30"
          rows="12"
          placeholder="Take a note..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>

  )
}

export default AddNote