import { Fragment, useRef, useState } from "react";
import Contacts from "./Contacts";
import "../../styles/Search.scss";
import AddContactModal from "./AddContactModal";

const Search = () => {
  const [openModal, setopenModal] = useState(false);
  const [enteredFilter, setEnteredFilter] = useState("");

  const inputRef = useRef();

  const clickHandler = (event) => {
    event.preventDefault();
    setopenModal(true);
  };

  const inputChangeHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  return (
    <Fragment>
      <form className="form">
        {/* <i className="fa fa-search"></i> */}
        <input
          ref={inputRef}
          type="text"
          id="search"
          placeholder="Search contacts"
          className="input"
          value={enteredFilter}
          onChange={inputChangeHandler}
        />

        <button className="button1" onClick={clickHandler}>
          <span>
            <i className="fa fa-plus"></i>&nbsp;&nbsp;
          </span>
          Add Contact
        </button>
        <button className="button2" onClick={clickHandler}>
          <span>
            <i className="fa fa-plus"></i>&nbsp;&nbsp;
          </span>
        </button>
      </form>
      {openModal && (
        <AddContactModal
          openModal={openModal}
          setopenModal={setopenModal}
        ></AddContactModal>
      )}
      <Contacts inputValue={inputRef} filterValue={enteredFilter} />
    </Fragment>
  );
};

export default Search;
