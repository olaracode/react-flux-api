import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "../component/ContactForm.jsx";
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

const CreateContact = () => {
  const [newContact, setNewContact] = useState(defaultContact);

  // Error es mi variable que si es true hay error
  const [error, setError] = useState(false);
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  // Event handlers
  const handleChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const addNewContact = async () => {
    const response = await actions.addNewContact(newContact);
    if (response === false) {
      setError(true);
    } else {
      // Si se crea correctamente quiero redirigirlo al home
      setError(false);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Crea un contacto!</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            Ocurrio un error, asegurate que el correo no este repetido o intenta
            mas tarde
          </div>
        )}
        <ContactForm handleChange={handleChange} fields={formFields} />

        <h2>Preview</h2>
        <p>{newContact.fullName}</p>
        <button className="btn btn-success my-2" onClick={addNewContact}>
          Agregar Contacto!
        </button>
        <Link to={-1}>Go back</Link>
      </div>
    </div>
  );
};

export default CreateContact;
