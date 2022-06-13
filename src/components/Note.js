import React from 'react'

function Note({ id, text, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <button
        className="note-delete"
        onClick={() => handleDeleteNote(id)}
      >X</button>
    </div>
  )
}

export default Note;