import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import ListContacts from "./ListContacts";


function App() {
  const [contacts, setContact] = useState([
    {
      id: "ryan",
      name: "Ryan Florence",
      email: "ryan@reacttraining.com",
      avatarUrl: "http://localhost:3000/ryan.jpg"
    },
    {
      id: "michael",
      name: "Michael Jackson",
      email: "michael@reacttraining.com",
      avatarUrl: "http://localhost:3000/michael.jpg"
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      email: "tyler@reacttraining.com",
      avatarUrl: "http://localhost:3000/tyler.jpg"
    }
  ]);

  const removeContact = (contact) => {
    setContact( () => contacts.filter( c => c.id !== contact.id ));
  }
  return (
    <div className="App">
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  );
}

export default App;
