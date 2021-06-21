import { Fragment } from "react";
import Avatar from "react-avatar";
import ContactDetailCard from "../UI/ContactDetailCard";
import "../../styles/ContactDetail.scss";
import { useDispatch } from "react-redux";
import { toogle } from "../../store/store";

const ContactDetail = (props) => {
  const dispatch = useDispatch();

  const backdropHandler = () => {
    dispatch(toogle());
  };

  const { name, address, company, phone, email } = props;
  const contactdetailmodal = (
    <div>
      <div className="backdropdetail" onClick={backdropHandler} />
      <ContactDetailCard className="detailcontactmodal me-3">
        <div className="detail mb-5">
          <Avatar className="mb-2" name={name} round={true} size="60" />
          <h4 className="mb-0">
            <strong>{name}</strong>
          </h4>
          <h6>{email}</h6>
        </div>

        <table className="table-borderless">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{company}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{address}</td>
            </tr>
          </tbody>
        </table>
      </ContactDetailCard>
    </div>
  );

  return <Fragment>{contactdetailmodal}</Fragment>;
};

export default ContactDetail;
