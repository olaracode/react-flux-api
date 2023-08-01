import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// Los props son valores que reciben los componentes para hacerlos dinamicos
const ContactCard = ({ full_name, email, phone_number, adress, id }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/200/300"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{full_name}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">{phone_number}</p>
            <p className="card-text">{adress}</p>
            <button onClick={() => actions.deleteContact(id)}>Borrar</button>
            <button onClick={() => navigate(`/edit/${id}`)}>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
