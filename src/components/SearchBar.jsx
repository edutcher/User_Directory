import React from "react";
import TextField from "@material-ui/core/TextField";

function SearchBar(props) {
  const { setSearch } = props;
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return <TextField id="search" label="search" onChange={handleChange} />;
}

export default SearchBar;
