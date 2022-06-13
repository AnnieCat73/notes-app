import React from 'react'

function Note({ id, text }) {
  return (
    <div className="note">
      <span>{text}</span>
      <button className="note-delete">X</button>
    </div>
  )
}

export default Note;