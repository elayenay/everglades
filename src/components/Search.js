import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} </h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
