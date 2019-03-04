import React from "react";

function ContactCard(props) {
    console.log(props)
  return (
    <div className="contact-card">
      <h5>{props.contact.city} </h5>
      <h4>{props.contact.name}</h4>
      <h3>{props.contact.lName}</h3>
      <h2>{props.contact.hobby}</h2>
      <h1>{props.contact.age}</h1>
    </div>
  );
}

export default ContactCard;
