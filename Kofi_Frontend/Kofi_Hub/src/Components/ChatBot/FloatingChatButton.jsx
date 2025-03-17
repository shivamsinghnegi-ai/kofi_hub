import React from 'react';
import { motion } from 'framer-motion';
import { Coffee  } from 'lucide-react';
import './ChatBot.css'; //

export const FloatingChatButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="floating-chat-button"
      aria-label="Chat with Coffee Assistant"
    >
      <Coffee  className="chat-icon" />
    </motion.button>
  );
};

export default FloatingChatButton;