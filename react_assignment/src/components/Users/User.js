import classes from "./User.module.css";
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const User = (props) => {
  return (
    <li className={classes.user}>
      <div className={classes.container}>
        <div className={classes.menu}>
          <div className={classes["menu-group"]}>
            <div className={classes["menu-item"]}>
              <img
                className={classes["menu-item-image"]}
                src={props.profilepic}
                alt={props.name}
              />

              <div className={classes["menu-item-text"]}>
                <h4 className={classes["menu-item-heading"]}>
                  <span className={classes["menu-item-name"]}>
                    <a href={props.url} target="_blank">
                      {props.username}
                    </a>
                  </span>
                  <span className={classes["menu-item-name"]}>
                    {props.name}
                  </span>
                </h4>
                <div className={classes["menu-item-description"]}>
                  <h5>{props.bio}</h5>
                  <br />
                  <h6 className={classes.color}>
                    <FaMapMarker />
                    {props.location}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FaEnvelope />
                    &nbsp;
                    {props.username}@gmail.com
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default User;
