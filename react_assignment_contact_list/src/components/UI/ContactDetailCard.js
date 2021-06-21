import "../../styles/ContactDetailCard.scss";

const ContactDetailCard = (props) => {
  const classes = "contactdetailcard";
  return (
    <div className={`${classes} ${props.className}`}>{props.children}</div>
  );
};

export default ContactDetailCard;
