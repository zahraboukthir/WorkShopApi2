import React from "react";

const Search = ({ handelSearch }) => {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => handelSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
