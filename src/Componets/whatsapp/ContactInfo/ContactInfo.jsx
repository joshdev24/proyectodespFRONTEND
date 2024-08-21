import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { getContactInfoById } from "../../../helpers/getContactInfoById";
import "./ContactInfo.css";

const ContactInfo = () => {
  const params = useParams();

  const contactData = getContactInfoById(params.id_contacto);
  const Color = contactData.color
  const Back = contactData.backgroundColor


  return (
    <div className="contact-info-container">
      <Header contactData={contactData} backURL={`/chat/${contactData.id}`} />
      <div className="contact-info-data" style={{ backgroundColor: contactData.color }}>


        <div className="profile-pic">
          <img
            src={`/images/${contactData.profilePicture}`}
          />
        </div>
        <div className="contact-name">
          <span>{contactData.name}</span>
        </div>
        <div className="status">
          <span><i> {contactData.status} </i></span>
        </div>
        <div className="bottom-icon" style={{ backgroundColor:  Back }} >
          <button style={{ backgroundColor: Color }}><i class="bi bi-star">   <span> Mensajes Destacados </span>  </i></button>
          <button style={{ backgroundColor: Color }}><i class="bi bi-bell">          <span> Silenciar Notificaciones</span></i></button>
          <button style={{ backgroundColor: Color }}><i class="bi bi-clock-history"></i> <span> Mensajes guardados </span> </button>

        </div>
        <div className="options" > 
          <button style={{ backgroundColor: Back }} > <i class="bi bi-ban"></i> <span> Bloquear Contacto</span></button>
        <button style={{ backgroundColor: Back }}> <i class="bi bi-recycle"></i> <span> Vaciar Chat </span></button>
        <button style={{ backgroundColor:  Back }}> <i class="bi bi-flag"></i> <span> Reportar Usuario</span></button>
        <button style={{ backgroundColor:  Back }}> <i class="bi bi-star"></i> <span> Añadir a Favoritos </span></button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;