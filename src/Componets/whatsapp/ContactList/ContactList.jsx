import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Settings, MoreVertical, Search, Zap, User, PhoneMissed, PhoneIncoming, ArrowUpRight, Bell, Moon, Lock, HelpCircle, LogOut } from 'lucide-react';
import data from "../../../data.js";
import Contact from "../Contact/Contact.jsx";
import './ContactList.css';

const ContactList = () => {
  const [activeTab, setActiveTab] = useState('chats'); // 'chats', 'calls', 'settings'

  // Chats State
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
  }, [categoriaSeleccionada]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { loop: Infinity, staggerChildren: 0.1 }
    },
    exit: { opacity: 0 }
  };

  return (
    <div className="main-layout">
      <div className="contact-list-container glass-panel">

        {/* Header Section */}
        <div className="app-header">
          <div className="brand">
            <span className="logo-text">
              {activeTab === 'chats' && 'Memory Log'}
              {activeTab === 'calls' && 'Llamadas'}
              {activeTab === 'settings' && 'Ajustes'}
            </span>
          </div>
          <button className="icon-btn">
            <MoreVertical size={20} color="var(--text-secondary)" />
          </button>
        </div>

        {/* Content Area - Switch based on Active Tab */}
        <div className="contact-scroll-area">
          <AnimatePresence mode='wait'>

            {/* CHATS TAB */}
            {activeTab === 'chats' && (
              <motion.div
                key="chats"
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Category Tabs (Only for Chats) */}
                <div className="category-tabs">
                  {categoriasDisponibles.map(categoria => (
                    <button
                      key={categoria}
                      className={`tab-btn ${categoriaSeleccionada === categoria ? 'active' : ''}`}
                      onClick={() => handleChangeCategoria(categoria)}
                    >
                      <span style={{ position: 'relative', zIndex: 10 }}>{categoria}</span>
                      {categoriaSeleccionada === categoria && (
                        <motion.div
                          className="tab-indicator"
                          layoutId="activeTab"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="contact-grid">
                  {emocionesState.map(contact => (
                    <Contact contact={contact} key={contact.id} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* CALLS TAB */}
            {activeTab === 'calls' && (
              <motion.div
                key="calls"
                className="calls-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="calls-list">
                  <CallItem
                    name="Ansiedad"
                    status="Perdida (14)"
                    time="Hace 2 min"
                    color="#fb923c"
                    image="ansiedad.jpg"
                    icon={<PhoneMissed size={18} color="#ef4444" />}
                    isMissed={true}
                  />
                  <CallItem
                    name="Furia"
                    status="Perdida (3)"
                    time="Ayer"
                    color="#f87171"
                    image="furia.jpg"
                    icon={<PhoneMissed size={18} color="#ef4444" />}
                    isMissed={true}
                  />
                  <CallItem
                    name="Alegría"
                    status="Entrante"
                    time="Hoy, 10:30"
                    color="#fbbf24"
                    image="alegria.jpg"
                    icon={<PhoneIncoming size={18} color="#22c55e" />}
                  />
                  <CallItem
                    name="Tristeza"
                    status="Saliente"
                    time="Hoy, 09:15"
                    color="#60a5fa"
                    image="tristeza.jpg"
                    icon={<ArrowUpRight size={18} color="#94a3b8" />}
                  />
                  <CallItem
                    name="Temor"
                    status="Perdida"
                    time="Martes"
                    color="#c084fc"
                    image="temor.jpg"
                    icon={<PhoneMissed size={18} color="#ef4444" />}
                    isMissed={true}
                  />
                </div>
              </motion.div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                className="settings-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="settings-profile">
                  <div className="settings-avatar">
                    <img src="/images/grupo.jpg" alt="Profile" />
                  </div>
                  <h3>Riley (La Mente)</h3>
                  <p>Estado de Memoria: 85% Lleno</p>
                </div>

                <div className="settings-list">
                  <SettingItem icon={<KeyIcon />} title="Cuenta" subtitle="Privacidad, seguridad" />
                  <SettingItem icon={<Bell size={20} />} title="Notificaciones" subtitle="Tonos de emociones" />
                  <SettingItem icon={<Moon size={20} />} title="Apariencia" subtitle="Tema Aurora" />
                  <SettingItem icon={<Lock size={20} />} title="Privacidad Mental" subtitle="Bloqueo de recuerdos" />
                  <SettingItem icon={<HelpCircle size={20} />} title="Ayuda" subtitle="Centro de control" />
                  <SettingItem icon={<LogOut size={20} />} title="Desconectar" subtitle="" danger />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav glass-panel">
          <button
            className={`nav-item ${activeTab === 'calls' ? 'active' : ''}`}
            onClick={() => setActiveTab('calls')}
          >
            <Phone size={24} />
            <span style={{ fontSize: 10 }}>Llamadas</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'chats' ? 'active' : ''}`}
            onClick={() => setActiveTab('chats')}
          >
            <MessageSquare size={24} />
            <span style={{ fontSize: 10 }}>Chats</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={24} />
            <span style={{ fontSize: 10 }}>Ajustes</span>
          </button>
        </div>

      </div>
    </div>
  );
};

// Sub-components for cleaner code
const CallItem = ({ name, status, time, color, image, icon, isMissed }) => (
  <div className="call-item glass-row">
    <div className="call-avatar" style={{ border: `2px solid ${color}` }}>
      <img src={`/images/${image}`} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div className="call-info">
      <span className={`call-name ${isMissed ? 'missed' : ''}`}>{name}</span>
      <div className="call-meta">
        {icon}
        <span>{status} • {time}</span>
      </div>
    </div>
    <button className="call-action">
      <Phone size={20} />
    </button>
  </div>
);

const SettingItem = ({ icon, title, subtitle, danger }) => (
  <button className={`setting-item glass-row ${danger ? 'danger' : ''}`}>
    <div className="setting-icon">
      {icon}
    </div>
    <div className="setting-info">
      <span className="setting-title">{title}</span>
      {subtitle && <span className="setting-subtitle">{subtitle}</span>}
    </div>
  </button>
);

// Helper icon
const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3v-3h3v-3h-3v-3h-3z" /></svg>
);

export default ContactList;
