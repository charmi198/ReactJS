import classes from "./SearchBackup.module.css";
import { Fragment, useEffect, useRef, useState } from "react";
import User from "../Users/User";
import LoadingSpinner from "./LoadingSpinner";
import ErrorModal from "./ErrorModal";
import FilteredUsers from "../Users/FilteredUsers";

const SearchBackup = () => {
  // const selectvalue = useRef();

  const [selectedValue, setSelectedValue] = useState("ahmedabad");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [enteredFilter, setEnteredFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const inputRef = useRef();

  const selectChangeHandler = (event) => {
    // console.log(selectvalue.current.value);
    // locvalue = selectvalue.current.value;
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };
  const locvalue = selectedValue;

  // const inputChangeHandler = () => {
  //   console.log(inputRef.current.value);
  // };

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=followers:%3E1+location:'${locvalue}'&sort=followers&order=desc&per_page=10`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);

      const loadedUsers = [];

      for (let key in data["items"]) {
        const userRes = await fetch(data["items"][key].url);
        if (!userRes.ok) {
          throw new Error("Something went wrong");
        }

        const userdata = await userRes.json();
        //console.log(userdata);

        loadedUsers.push({
          profilepic: userdata.avatar_url,
          username: userdata.login,
          name: userdata.name,
          bio: userdata.bio,
          location: userdata.location,
          mail: userdata.email,
          url: userdata.html_url,
        });
      }

      setUsers(loadedUsers);
      console.log(loadedUsers);
      setIsLoading(false);
    };
    fetchUsers().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, [locvalue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let filteredUsersArray = [];

      filteredUsersArray = users.filter((user) =>
        user.username.toLowerCase().includes(enteredFilter.toLowerCase())
      );
      setFilteredUsers(filteredUsersArray);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef]);

  const errorHandler = () => {
    setError(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorModal
        title="Something went wrong!"
        message="Try Again later!"
        onConfirm={errorHandler}
      />
    );
  }

  const usersList = users.map((user) => (
    <User
      profilepic={user.profilepic}
      username={user.username}
      name={user.name}
      bio={user.bio}
      location={user.location}
      mail={user.mail}
      url={user.url}
    />
  ));

  const filteredUsersList = filteredUsers.map((user) => (
    <FilteredUsers
      profilepic={user.profilepic}
      username={user.username}
      name={user.name}
      bio={user.bio}
      location={user.location}
      mail={user.mail}
      url={user.url}
    />
  ));

  const returnform = (
    <Fragment>
      <div>
        <form className={classes.form}>
          <input
            ref={inputRef}
            className={classes.input}
            id="user"
            type="text"
            placeholder="Search for a user..."
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
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
      </div>
    </Fragment>
  );

  return (
    <div>
      <div>{returnform}</div>
      <ul>{enteredFilter.length !== 0 ? filteredUsersList : usersList}</ul>
    </div>
  );
};

export default SearchBackup;
