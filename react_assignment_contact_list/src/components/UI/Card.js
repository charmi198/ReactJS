import "../../styles/Card.scss";

const Card = (props) => {
  const classes = "contactcard";
  return (
    <div className={`${classes} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
