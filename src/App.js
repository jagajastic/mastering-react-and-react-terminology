import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import ListContacts from "./ListContacts";
import * as ContactAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    ContactAPI.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);
  const removeContact = contact => {
    setContacts(() => contacts.filter(c => c.id !== contact.id));

    ContactAPI.remove(contact);
  };

  const createContact = contact => {
    ContactAPI.create(contact).then(contact => {
      setContacts(contact => contacts.concat([contact]));
    });
  };

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        )}
      />

      <Route
        path="/create"
        render={history => (
          <CreateContact
            onCreateContact={contact => {
              createContact(contact);
              history.push("/");
            }}
          />
        )}
      />
    </div>
  );
}

export default App;
