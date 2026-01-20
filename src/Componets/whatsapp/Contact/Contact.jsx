import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  function handleContactSelect() {
    navigate("/chat/" + contact.id);
  }

  // Animation variant for the list item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const lastMessage = contact.chatHistory[contact.chatHistory.length - 1];

  return (
    <motion.div
      className="contact-card"
      onClick={handleContactSelect}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: `linear-gradient(90deg, ${contact.backgroundColor}20 0%, transparent 100%)`,
        borderLeft: `4px solid ${contact.backgroundColor}`
      }}
    >
      <div className="avatar-container">
        <div
          className="avatar-ring"
          style={{ borderColor: contact.backgroundColor, boxShadow: `0 0 10px ${contact.backgroundColor}40` }}
        />
        <img
          className="profile-picture"
          src={"/images/" + contact.profilePicture}
          alt={contact.name}
        />
      </div>

      <div className="contact-info">
        <div className="header-info">
          <span className="contact-name">{contact.name}</span>
          <span className="last-date">{lastMessage.date}</span>
        </div>
        <p className="last-message" style={{ color: contact.backgroundColor }}>
          {/* Using the color for the message preview gives a hint of the emotion */}
          <span className="preview-text" style={{ filter: 'brightness(1.5) saturate(0.8)' }}>
            {lastMessage.content}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;