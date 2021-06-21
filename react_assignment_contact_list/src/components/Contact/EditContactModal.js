import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../store/store";
import "../../styles/AddContactModal.scss";
import Card from "../UI/Card";

const EditContactModal = (props) => {
  const dispatch = useDispatch();

  const selectedContact = useSelector((state) => state.contact);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  useEffect(() => {
    if (selectedContact != null) {
      setEnteredName(selectedContact.name);
      setEnteredEmail(selectedContact.email);
      setEnteredPhone(selectedContact.phone);
      setEnteredCompany(selectedContact.company);
      setEnteredAddress(selectedContact.address);
    }
    dispatch(getContact(id));
  }, [selectedContact]);

  const { openModal, setopenModal, id } = props;

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => (document.body.style.overflow = "unset");
  // }, []);

  const backdropHandler = () => {
    setopenModal(false);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const update_Contact = {
      // id: shortid.generate(),
      id: id,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      company: enteredCompany,
      address: enteredAddress,
    };
    // dispatch(addContact(newContact));
    dispatch(updateContact(update_Contact));
    console.log(update_Contact);
    // console.log(id);
    setopenModal(false);
  };

  const removeHandler = () => {
    setopenModal(false);
  };

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

  const editModal = (
    <div>
      <div className="backdrop" onClick={backdropHandler} />

      <Card className="addcontactmodal">
        <header className="header">
          <h2>Update a Contact</h2>
        </header>
        <div className="content">
          <form>
            <label id="name">Name: </label>
            <br />
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameInputHandler}
            />
            <br />
            <label id="email">Email: </label>
            <br />
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailInputHandler}
            />
            <br />
            <label id="phone">Phone: </label>
            <br />
            <input
              type="number"
              id="phone"
              value={enteredPhone}
              onChange={phoneInputHandler}
            />
            <br />
            <label id="company">Company: </label>
            <br />
            <input
              type="text"
              id="company"
              value={enteredCompany}
              onChange={companyInputHandler}
            />
            <br />
            <label id="address">Address: </label>
            <br />
            <textarea
              id="address"
              value={enteredAddress}
              onChange={addressInputHandler}
            ></textarea>
          </form>
        </div>
        <footer className="actions">
          <button className="button" onClick={updateHandler}>
            Update
          </button>
          <button className="button" onClick={removeHandler}>
            Cancel
          </button>
        </footer>
      </Card>
    </div>
  );

  return <div>{openModal && editModal}</div>;
};

export default EditContactModal;
