import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Bell, Clock, Ban, Trash2, Flag } from "lucide-react";
import { getContactInfoById } from "../../../helpers/getContactInfoById";
import "./ContactInfo.css";

const ContactInfo = () => {
  const params = useParams();
  const contactData = getContactInfoById(params.id_contacto);

  if (!contactData) return <div>Contact not found</div>;

  const emotionColor = contactData.backgroundColor;

  return (
    <div className="layout-center">
      <motion.div
        className="info-panel glass-panel"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Header */}
        <div className="info-header">
          <Link to={`/chat/${contactData.id}`} className="back-btn">
            <ArrowLeft size={24} />
          </Link>
          <span className="header-title">Contact Info</span>
        </div>

        {/* Profile Section */}
        <div className="profile-hero">
          <div
            className="hero-avatar-ring"
            style={{
              borderColor: emotionColor,
              boxShadow: `0 0 30px ${emotionColor}40`
            }}
          >
            <img src={`/images/${contactData.profilePicture}`} alt={contactData.name} />
          </div>
          <h1 className="hero-name">{contactData.name}</h1>
          <p className="hero-status">"{contactData.status}"</p>
        </div>

        {/* Actions Grid */}
        <div className="actions-list">
          <div className="action-group">
            <button className="action-row">
              <div className="icon-box" style={{ background: "rgba(251, 191, 36, 0.1)", color: "#fbbf24" }}>
                <Star size={20} />
              </div>
              <span>Mensajes Destacados</span>
            </button>
            <button className="action-row">
              <div className="icon-box" style={{ background: "rgba(96, 165, 250, 0.1)", color: "#60a5fa" }}>
                <Bell size={20} />
              </div>
              <span>Silenciar Notificaciones</span>
            </button>
            <button className="action-row">
              <div className="icon-box" style={{ background: "rgba(163, 230, 53, 0.1)", color: "#a3e635" }}>
                <Clock size={20} />
              </div>
              <span>Mensajes Guardados</span>
            </button>
          </div>

          <div className="action-group danger-zone">
            <button className="action-row danger">
              <Ban size={20} />
              <span>Bloquear Contacto</span>
            </button>
            <button className="action-row danger">
              <Trash2 size={20} />
              <span>Vaciar Chat</span>
            </button>
            <button className="action-row danger">
              <Flag size={20} />
              <span>Reportar Usuario</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactInfo;