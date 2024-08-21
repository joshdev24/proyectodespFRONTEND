import React, { useState, useEffect } from 'react';
import data from "../../../data.js";
import Contact from "../Contact/Contact.jsx";
import './ContactList.css';
const ContactList = ( ) => {
  const categoriasDisponibles = ['NIÑEZ', 'PUBERTAD'];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('NIÑEZ');
  const [emocionesState, setEmocionesState] = useState(data);
  

  const handleChangeCategoria = (nuevoValor) => {
    setCategoriaSeleccionada(nuevoValor);
  };

  useEffect(() => {
    if (categoriaSeleccionada === '') {
      setEmocionesState(data);
    } else {
      setEmocionesState(data.filter(contact => contact.categoria === categoriaSeleccionada));
    }
  }, [categoriaSeleccionada, data]);
  

  return (
    <div className="contact-list-container">
      

      <div className="header">
        <span>WhatsApp</span>
        {categoriasDisponibles.map(categoria => (
          <button 
          className='btn'
            key={categoria}
            onClick={() => handleChangeCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
        <i className="bi bi-three-dots-vertical"></i>
      </div>

      <div className="contact-container2">
        {emocionesState.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
        
      </div>

      <div className="btm-cont">
        <i className="bi bi-telephone">  Llamadas </i>
        <i className="bi bi-chat-fill">  Chats </i>
        <i className="bi bi-gear-wide-connected">  Configuración </i>
      </div>


    </div>
  );
};

export default ContactList;


