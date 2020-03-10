import React, { useState } from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
const ListContacts = props => {
  const [state, setState] = useState({ query: "" });

  const { query } = state;
  const { contacts, onDeleteContact } = props;

  const updateQuery = query => {
    setState({ query: query.trim() });
  };

  let showingContacts;

  if (query) {
    const match = new RegExp(escapeRegExp(query), "i");
    showingContacts = contacts.filter(contact => match.test(contact.name));
  } else {
    showingContacts = contacts;
  }

  showingContacts.sort(sortBy("name"));

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          value={query}
          onChange={event => updateQuery(event.target.value)}
          placeholder="Search contacts"
        />
      </div>
      <ol className="contact-list">
        {showingContacts.map((contact, index) => {
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
              <button onClick={() => onDeleteContact(contact)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

ListContacts.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
