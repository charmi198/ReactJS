import { Fragment } from "react";
import { useState } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { deleteConatct, toogle } from "../../store/store";
import "../../styles/Contact.scss";
import EditContactModal from "./EditContactModal";

const Contact = (props) => {
  const dispatch = useDispatch();

  // const showDetails = useSelector((state) => state.cartIsVisible);

  const [openModal, setopenModal] = useState(false);

  // console.log("Contact" + props);

  const editmodalHandler = () => {
    console.log(props.id);
    setopenModal(true);
  };

  const deleteContactHandler = () => {
    const ID = props.id;
    dispatch(deleteConatct(ID));
    console.log(props.id + "deleted");
  };

  const detailHandler = () => {
    // console.log("clicked");
    console.log(props.id);
    dispatch(toogle());
    props.selectedContact(props);
  };

  const individualContact = (
    <tr id={props.id}>
      <td className="align-middle me-3">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td className="align-middle me-5">
        <div className="menu-group">
          <div className="menu-item">
            <Avatar className="me-3" name={props.name} round={true} size="60" />
            <div className="menu-item-text">
              <h5 className="menu-item-heading" onClick={detailHandler}>
                <b className="mt-2 showpointer">{props.name}</b>
              </h5>
              {/* <br /> */}
              <h6 className="align-middle">{props.email}</h6>
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle">{props.cname}</td>
      <td id="actions" className="align-middle">
        <span className="material-icons me-2" onClick={editmodalHandler}>
          edit
        </span>

        {openModal && (
          <EditContactModal
            id={props.id}
            openModal={openModal}
            setopenModal={setopenModal}
          />
        )}

        <span
          className="material-icons text-danger"
          onClick={deleteContactHandler}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
  return (
    <Fragment>
      {individualContact}

      {/* {showDetails && <ContactDetail key={Math.random()} contact={props} />} */}
    </Fragment>
  );
};

export default Contact;
