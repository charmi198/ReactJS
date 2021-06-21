import { Fragment } from "react";
import "../../styles/Header.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header1">
        <br />
        <hr className="line" />

        <div className="header_content">
          <h2>Contacts</h2>
          <h5>Welcome to the contacts page!</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
