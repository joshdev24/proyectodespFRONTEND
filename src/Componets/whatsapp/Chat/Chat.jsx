import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Plus, Camera, Mic, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ data }) => {
    const [message, setMessage] = useState("");
    const [contactData, setContactData] = useState(data);
    const bottomRef = useRef(null);

    const emotionColor = contactData.backgroundColor;
    const secondaryColor = contactData.color;

    useEffect(() => {
        // Scroll to bottom on new message
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [contactData.chatHistory]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = {
            author: "Yo",
            content: message,
            date: "Ahora",
            state: "visto",
            id: crypto.randomUUID(),
        };

        setContactData({
            ...contactData,
            chatHistory: [...contactData.chatHistory, newMessage],
        });
        setMessage("");
    }

    return (
        <div className="chat-layout">
            <motion.div
                className="chat-interface glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ "--theme-color": emotionColor }}
            >
                {/* Header */}
                <div className="chat-header" style={{ borderBottomColor: "var(--glass-border)" }}>
                    <Link to="/" className="back-button">
                        <ArrowLeft size={24} color="var(--text-primary)" />
                    </Link>
                    <Link to={`/info/${contactData.id}`} className="header-profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="header-avatar-ring" style={{ borderColor: emotionColor }}>
                            <img src={`/images/${contactData.profilePicture}`} alt={contactData.name} />
                        </div>
                        <div className="header-info">
                            <h2>{contactData.name}</h2>
                            <p className="status-text">{contactData.categoria || "Conectado"}</p>
                        </div>
                    </Link>
                </div>

                {/* Messages Area */}
                <div
                    className="messages-area"
                >
                    <div className="date-divider">
                        <span>Hoy</span>
                    </div>

                    <AnimatePresence>
                        {contactData.chatHistory.map(({ id, author, content, date, state }) => {
                            const isMe = author === "Yo";
                            return (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`message-row ${isMe ? "sent" : "received"}`}
                                >
                                    <div
                                        className="message-bubble"
                                    >
                                        <p>{content}</p>
                                        <div className="message-meta">
                                            <span>{date}</span>
                                            {isMe && <span className="checks">✓✓</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                    <div ref={bottomRef} />
                </div>

                {/* Input Area */}
                <form className="input-area glass-panel" onSubmit={handleSubmit}>
                    <button type="button" className="action-btn">
                        <Plus size={20} />
                    </button>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Escribe un pensamiento..."
                        />
                    </div>
                    {message ? (
                        <button type="submit" className="send-btn" style={{ backgroundColor: emotionColor }}>
                            <Send size={18} color="#fff" />
                        </button>
                    ) : (
                        <div className="secondary-actions">
                            <button type="button" className="action-btn"><Camera size={20} /></button>
                            <button type="button" className="action-btn"><Mic size={20} /></button>
                        </div>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default Chat;
