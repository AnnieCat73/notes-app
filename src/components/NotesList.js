import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({ notes, handleAddNote }) {//here get notes array from app
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) =>
        <Note
          id={note.id}
          text={note.text}
        />)}


    </div>
  )
}

export default NotesList