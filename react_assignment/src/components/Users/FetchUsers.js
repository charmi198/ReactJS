import classes from "./FetchUsers.module.css";
import { Fragment, useEffect, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import FilteredUsers from "./FilteredUsers";
import User from "./User";

const FetchUsers = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { url, locationValue, inputValue, filterValue } = props;

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      const response = await fetch(url);

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

        // console.log(key);

        const userdata = await userRes.json();
        //console.log(userdata);

        loadedUsers.push({
          id: key,
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
  }, [locationValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let filteredUsersArray = [];

      filteredUsersArray = users.filter((user) =>
        user.username.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredUsers(filteredUsersArray);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filterValue, inputValue]);

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
      key={user.id}
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
      key={user.id}
      profilepic={user.profilepic}
      username={user.username}
      name={user.name}
      bio={user.bio}
      location={user.location}
      mail={user.mail}
      url={user.url}
    />
  ));

  return (
    <Fragment>
      <section className={classes.users}>
        <ul>{filterValue.length !== 0 ? filteredUsersList : usersList}</ul>
      </section>
    </Fragment>
  );
};

export default FetchUsers;
