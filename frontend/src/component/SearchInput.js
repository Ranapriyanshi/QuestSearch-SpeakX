import React from "react";

const SearchInput = ({ query, setQuery, id }) => (
  <input
    id={id}
    type="text"
    placeholder="🔎 Search questions..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchInput;
