import React from 'react'

function Search({ handleSearchNote }) {
  return (
    <div className="search-container">
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder='Type here to search...'
        className="search"
      />
      <button className="toggle">Toggle Mode</button>
    </div>
  )
}

export default Search;