import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../component/ContactForm.jsx";
import { Context } from "../store/appContext";
const defaultContact = {
  email: "",
  fullName: "",
  phone: "",
  address: "",
};

const formFields = [
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Name",
    name: "fullName",
  },
  {
    label: "Phone",
    name: "phone",
  },
  {
    label: "Address",
    name: "address",
  },
];

const EditContact = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const [editContact, setEditContact] = useState(defaultContact);
  const handleChange = (event) => {
    setEditContact({ ...editContact, [event.target.name]: event.target.value });
  };

  const updateContact = async () => {
    const response = actions.editContact(params.id, editContact);
    if (response) {
      navigate("/");
    }
  };
  return (
    <div className="container">
      <ContactForm handleChange={handleChange} formFields={formFields} />
      <button onClick={updateContact}>Editar</button>
    </div>
  );
};

export default EditContact;
