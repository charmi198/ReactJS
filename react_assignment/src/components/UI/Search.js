import classes from "./Search.module.css";
import { Fragment, useRef, useState } from "react";
import FetchUsers from "../Users/FetchUsers";

const Search = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [enteredFilter, setEnteredFilter] = useState("");

  const inputRef = useRef();

  const selectChangeHandler = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const locvalue = selectedValue;

  let url =
    "https://api.github.com/search/users?q=followers:%3E10&sort=followers&order=desc&per_page=10";

  if (locvalue) {
    url = `https://api.github.com/search/users?q=followers:%3E1+location:'${locvalue}'&sort=followers&order=desc&per_page=10`;
  }

  const inputChangeHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  return (
    <Fragment>
      <form className={classes.form}>
        <input
          ref={inputRef}
          className={classes.input}
          id="user"
          type="text"
          placeholder="Search for a user..."
          value={enteredFilter}
          onChange={inputChangeHandler}
        />

        <select
          className={classes.select}
          id="city"
          value={selectedValue}
          onChange={selectChangeHandler}
        >
          <option value="ahmedabad">Ahmedabad</option>
          <option value="banglore">Banglore</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="hydrabad">Hydrabad</option>
          <option value="losangeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="newyork">New York</option>
          <option value="sanjose">San Jose</option>
          <option value="washington">Washington</option>
        </select>
      </form>
      <FetchUsers
        url={url}
        locationValue={locvalue}
        inputValue={inputRef}
        filterValue={enteredFilter}
      />
    </Fragment>
  );
};

export default Search;
