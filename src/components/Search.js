import React from 'react';

const Search = props => {

  return (
    <div>
    <h3>Filter by Name:</h3>
      <input
        onChange={props.handleSearchTerm}
        type="text"
        value={props.searchTerm}
      />
    </div>
  )

}

export default Search;
