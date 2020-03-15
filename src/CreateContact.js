import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serialForm from "form-serialize";
const CreateContact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const values = serialForm(e.target, { hash: true });
    console.log(values);
  };
  return (
    <div>
      <Link to="/">close</Link>
      <form onSubmit={handleSubmit}>
        <ImageInput
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "gray"
          }}
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Name" />
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
