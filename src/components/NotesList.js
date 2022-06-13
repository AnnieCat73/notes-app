import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({ notes, handleAddNote, handleDeleteNote }) {//here get notes array from app
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) =>
        <Note
          id={note.id}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
        />)}


    </div>
  )
}

export default NotesList