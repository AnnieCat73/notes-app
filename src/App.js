import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";



function App() {
  const [notes, setNotes] = useState([{ //array/state holding the added notes
    id: nanoid(),
    //title: "",
    text: "",
  }]);

  const addNote = (text) => { //where we create a new note
    const newNote = {         //function to be passed down to notelist then to addNote via handleAddNote prop
      id: nanoid(),
      //title: title,
      text: text,
    }
    const newNotes = [...notes, newNote];//new array for old and new note
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">

      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
