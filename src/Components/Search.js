import React from "react";
import { useDispatch } from 'react-redux';
import { getSV } from "../js/receipActions";

const Search = ({ handelSearch }) => {
  const dispatch=useDispatch()
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => dispatch(getSV((e.target.value)))}
      />
    </div>
  );
};

export default Search;
