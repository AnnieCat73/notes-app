import React from 'react'

function Search({ handleSearchNote, handleToggleDarkMode }) {
  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder='Type here to search...'
        className="search"
      />
      <button
        className="toggle"
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
      >
        Toggle Mode</button>
    </div>
  )
}

export default Search;