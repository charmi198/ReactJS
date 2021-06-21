import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/store";
import "../../styles/AddContactModal.scss";
import Card from "../UI/Card";
import shortid from "shortid";

const AddContactModal = (props) => {
  const dispatch = useDispatch();

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneInputHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const companyInputHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const addressInputHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const { openModal, setopenModal } = props;

  // if (enteredName == "") {
  //   alert("Please enter a valid name");
  // }

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => (document.body.style.overflow = "unset");
  // }, []);

  const backdropHandler = () => {
    setopenModal(false);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      company: enteredCompany,
      address: enteredAddress,
    };
    dispatch(addContact(newContact));
    console.log(newContact);
    setopenModal(false);
  };

  const removeHandler = () => {
    setopenModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    if (enteredName === "") {
      alert("Please enter your name!");
    }
  };

  const addModal = (
    <div>
      <div className="backdrop" onClick={backdropHandler} />

      <Card className="addcontactmodal">
        <header className="header">
          <h2>Add a New Contact</h2>
        </header>
        <div className="content">
          <form onSubmit={submitHandler}>
            <label id="name">Name: </label>
            <br />
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameInputHandler}
              required
            />
            <br />
            <label id="email">Email: </label>
            <br />
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailInputHandler}
              required
            />
            <br />
            <label id="phone">Phone: </label>
            <br />
            <input
              type="number"
              id="phone"
              value={enteredPhone}
              onChange={phoneInputHandler}
              required
            />
            <br />
            <label id="company">Company: </label>
            <br />
            <input
              type="text"
              id="company"
              value={enteredCompany}
              onChange={companyInputHandler}
              required
            />
            <br />
            <label id="address">Address: </label>
            <br />
            <textarea
              id="address"
              value={enteredAddress}
              onChange={addressInputHandler}
              required
            ></textarea>

            <footer className="actions">
              <button type="submit" className="button" onClick={addHandler}>
                Add
              </button>
              <button className="button" onClick={removeHandler}>
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </Card>
    </div>
  );

  return <div>{openModal && addModal}</div>;
};

export default AddContactModal;
