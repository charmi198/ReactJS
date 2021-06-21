import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/Contacts.scss";
import Contact from "./Contact";
import ContactDetail from "./ContactDetail";

const Contacts = (props) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const contactsList = useSelector((state) => state.contacts);

  const showDetails = useSelector((state) => state.cartIsVisible);

  const { filterValue, inputValue } = props;

  useEffect(() => {
    setContacts(contactsList);
  }, [contactsList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let filteredContactsArray = [];

      filteredContactsArray = contacts.filter((contact) =>
        contact["name"].toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredContacts(filteredContactsArray);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filterValue, inputValue, contacts]);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  var selectedContact = (contact) => {
    //console.log("===selectedContact===" + contact.name);
    setEnteredName(contact.name);
    setEnteredEmail(contact.email);
    setEnteredPhone(contact.phone);
    setEnteredCompany(contact.cname);
    setEnteredAddress(contact.address);
  };

  const defaultContacts = contacts.map((contact) => (
    <Contact
      key={contact.id}
      id={contact.id}
      name={contact["name"]}
      email={contact["email"]}
      cname={contact["company"]}
      phone={contact["phone"]}
      address={contact["address"]}
      selectedContact={selectedContact}
    />
  ));

  // const contactDetails = contacts.map((contact) => (
  //   // <ContactDetail
  //   //   id={contact.id}
  //   //   name={contact["name"]}
  //   //   email={contact["email"]}
  //   //   cname={contact["company"]}
  //   //   phone={contact["phone"]}
  //   //   address={contact["address"]}
  //   // />
  // ));

  const filteredContactsList = filteredContacts.map((contact) => (
    <Contact
      key={contact.id}
      id={contact.id}
      name={contact["name"]}
      email={contact["email"]}
      cname={contact["company"]}
      phone={contact["phone"]}
      address={contact["address"]}
    />
  ));

  return (
    <Fragment>
      <div className="contacts">
        <table className="table table-hover table-borderless table-responsive">
          <thead className="table-secondary">
            <tr>
              <th scope="col">
                <i className="fa fa-plus"></i>
              </th>
              <th scope="col">Basic info</th>
              <th scope="col">Company</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filterValue.length !== 0 ? filteredContactsList : defaultContacts}
          </tbody>
        </table>
      </div>
      {showDetails && (
        <ContactDetail
          name={enteredName}
          email={enteredEmail}
          phone={enteredPhone}
          company={enteredCompany}
          address={enteredAddress}
        />
      )}
    </Fragment>
  );
};

export default Contacts;
