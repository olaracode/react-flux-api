const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backendUrl: "https://contac-list-api.onrender.com/contacts/olaracode",
      contacts: [], // Todos-Nuestros-Contactos
      user: {
        username: "octavio",
      },
    },
    actions: {
      fetchContactsAPI: async () => {
        const store = getStore();
        // fetch -> que busca en las apis
        const response = await fetch(store.backendUrl);
        const data = await response.json();
        // setStore()
        setStore({ contacts: data });
      },
      addNewContact: async (contact) => {
        const store = getStore();
        const actions = getActions();

        const response = await fetch(store.backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: contact.email,
            full_name: contact.fullName,
            phone_number: contact.phone,
            adress: contact.address,
          }),
        });

        if (response.ok) {
          actions.fetchContactsAPI();
          return true;
        } else {
          return false;
        }
      },
      deleteContact: async (id) => {
        const store = getStore();
        const actions = getActions();

        const response = await fetch(store.backendUrl, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        if (response.ok) {
          actions.fetchContactsAPI();
          return true;
        } else {
          return false;
        }
      },
      editContact: async (id, contact) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(store.backendUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: parseInt(id),
            email: contact.email,
            full_name: contact.fullName,
            phone_number: contact.phone,
            adress: contact.address,
          }),
        });
        if (response.ok) {
          actions.fetchContactsAPI();
          return true;
        } else {
          return false;
        }
      },
    },
  };
};

export default getState;
