import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// Components
import ContactCard from "../component/ContactCard.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import User from "../component/User.jsx";
/**
 *
 * @api urlBase: https://contac-list-api.onrender.com/
 * - GET -> urlBase/contacts/{username}
 *
 *
 * - POST ->  urlBase/contacts/{username}
 * 	@body (email, full_name, phone_number, adress)
 *
 * - PUT -> urlBase/contacts/{username}
 * 	@body (ID, email, full_name, phone_number, adress)
 *
 * - DELETE -> urlBase/contacts/{username}
 * 	@body (id)
 *
 */

export const Home = () => {
  const { store } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <img src={rigoImage} />
      <h1>Mi super cool lista de contactos</h1>
      <Link className="link" to="/create">
        Crear contacto
      </Link>
      <User username={store.user.username} />
      <User username={"Pedro"} />

      <div className="container">
        {store.contacts.map((contact) => {
          return (
            <ContactCard
              full_name={contact.full_name}
              phone_number={contact.phone_number}
              adress={contact.adress}
              email={contact.email}
              id={contact.id}
              key={`contact-${contact.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};
