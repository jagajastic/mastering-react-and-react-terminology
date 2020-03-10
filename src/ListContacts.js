import React from "react";
import PropTypes from "prop-types"; 

const ListContacts =  props => {
  return (
    <ol className="contact-list">
      {props.contacts.map((contact, index) => {
        return (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              marginBottom: "1rem"
            }}
          >
            <div
              style={{
                marginRight: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundImage: `url(${contact.avatarUrl})`
              }}
            ></div>
            <div style={{ marginRight: "2rem" }}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => props.onDeleteContact(contact)}>
              Remove
            </button>
          </li>
        );
      })}
    </ol>
  );
};

ListContacts.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts ;