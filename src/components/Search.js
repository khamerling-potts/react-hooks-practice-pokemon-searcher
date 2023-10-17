import React from "react";

function Search({ onSearch, searchTerm }) {
  function handleInputChange(e) {
    onSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
