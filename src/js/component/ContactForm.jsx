import React from "react";

// Componente que solamente modifica y renderiza los inputs
const ContactForm = ({ handleChange, formFields }) => {
  return (
    <>
      {formFields.map((field, index) => {
        return (
          <div className="d-flex flex-column" key={`input-${index}`}>
            <label htmlFor="">{field.label}</label>
            <input type="text" name={field.name} onChange={handleChange} />
          </div>
        );
      })}
    </>
  );
};

export default ContactForm;
