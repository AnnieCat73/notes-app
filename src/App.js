import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";



function App() {
  const [notes, setNotes] = useState([{ //array/state holding the added notes
    id: nanoid(),
    //title: "",
    text: "",
  }]);

  const [searchText, setSearchText] = useState("");//

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
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <Footer />
    </div>
  );
}

export default App;
