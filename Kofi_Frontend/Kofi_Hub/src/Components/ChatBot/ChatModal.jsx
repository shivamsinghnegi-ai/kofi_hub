import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RefreshCcw, Trash, History, Coffee } from 'lucide-react';
import axios from 'axios'; // Added for API requests
import './ChatBot.css';

const USER_ID = "660123456789123456789123"; // This should ideally be dynamic per user

const PREDEFINED_QUESTIONS = [
  {
    question: "What's the best coffee for beginners?",
    response: "<strong>For beginners</strong>, I recommend starting with a <em>medium roast Colombian coffee</em>. It's smooth and balanced with:<ul><li><strong>Nutty</strong> notes</li><li><em>Chocolatey</em> undertones</li><li>Not too intense</li></ul>This makes it an <u>excellent</u> choice for new coffee drinkers."
  },  
  {
    question: "How do I make a perfect espresso?",
    response: "To make a <strong>perfect espresso</strong>:<ul><li>Use <strong>18-20g</strong> of <em>freshly ground coffee</em></li><li>Tamp <u>evenly</u> with firm pressure</li><li>Aim for a <em>25-30 second</em> extraction</li><li>Set your machine to <strong>9 bars</strong> of pressure</li><li>Use water at <em>195-205°F</em></li></ul>This will give you a <u>rich, creamy</u> espresso."
  },
  {
    question: "What’s the difference between Arabica and Robusta?",
    response: "Here’s the difference:<ul><li><strong>Arabica</strong>: <em>Smoother</em>, <u>sweeter</u>, more acidic, complex flavors</li><li><strong>Robusta</strong>: <em>Stronger</em>, <u>harsher</u>, higher caffeine, more bitter</li></ul>Choose <u>Arabica</u> for quality, <em>Robusta</em> for intensity."
  }
];

const formatAIResponse = (text) => {
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/__(.*?)__/g, '<u>$1</u>')
    .replace(/^- (.*)$/gm, '<li>$1</li>');

  if (formatted.includes('<li>')) {
    formatted = formatted.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  }

  formatted = formatted
    .split('\n')
    .map(line => {
      if (line.trim() && !line.includes('<li>') && !line.includes('</ul>') && !line.includes('<ul>')) {
        return `<p>${line}</p>`;
      }
      return line;
    })
    .join('');

  return formatted;
};

const generateChatTitle = (messages) => {
  const firstUserMessage = messages.find(msg => !msg.isBot)?.text || "Untitled Chat";
  return firstUserMessage.length > 30 ? `${firstUserMessage.substring(0, 27)}...` : firstUserMessage;
};

export const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your coffee assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const API_BASE_URL = 'http://localhost:5000';   //Backend ki deployed link enter kar dena

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      const storedHistory = localStorage.getItem(`chatHistory_${USER_ID}`);
      if (storedHistory) {
        setChatHistory(JSON.parse(storedHistory));
      }
    }
  }, [isOpen]);

  const handlePredefinedQuestion = (questionObj) => {
    setMessages(prev => [...prev, { text: questionObj.question, isBot: false }]);
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: questionObj.response, isBot: true }]);
      setIsLoading(false);
    }, 1000);
  };

  const fetchBotResponse = async (question) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/chatbot/query`, {
        userId: USER_ID,
        question: question,
      });
      return formatAIResponse(response.data.response);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return formatAIResponse("Sorry, I couldn’t fetch a response right now. Try again later!");
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    const predefined = PREDEFINED_QUESTIONS.find(q => 
      q.question.toLowerCase() === userMessage.toLowerCase()
    );

    if (predefined) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: predefined.response, isBot: true }]);
        setIsLoading(false);
      }, 1000);
    } else {
      const botResponse = await fetchBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    const storedHistory = localStorage.getItem(`chatHistory_${USER_ID}`);
    let history = storedHistory ? JSON.parse(storedHistory) : [];
    if (messages.length > 1) {
      history.push({
        id: Date.now(),
        title: generateChatTitle(messages),
        messages: messages
      });
      localStorage.setItem(`chatHistory_${USER_ID}`, JSON.stringify(history));
      setChatHistory(history);
    }
    setMessages([
      { text: "Hello! I'm your coffee assistant. How can I help you today?", isBot: true }
    ]);
    setShowHistory(false);
  };

  const handleEndChat = () => {
    const storedHistory = localStorage.getItem(`chatHistory_${USER_ID}`);
    let history = storedHistory ? JSON.parse(storedHistory) : [];
    if (messages.length > 1) {
      history.push({
        id: Date.now(),
        title: generateChatTitle(messages),
        messages: messages
      });
      localStorage.setItem(`chatHistory_${USER_ID}`, JSON.stringify(history));
      setChatHistory(history);
    }
    setMessages([
      { text: "Hello! I'm your coffee assistant. How can I help you today?", isBot: true }
    ]);
    setShowHistory(false);
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const loadChat = (chat) => {
    setMessages(chat.messages);
    setShowHistory(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="chat-modal"
        >
          <div className="chat-header">
            <div className="header-content">
              <div className="header-icon">
                <Coffee />
              </div>
              <div className="header-text">
                <h2>Coffee Assistant</h2>
                <p>Brewing knowledge, one chat at a time</p>
              </div>
            </div>
            <button onClick={onClose} className="close-button" aria-label="Close chat">
              <X />
            </button>
          </div>

          <div className="chat-controls">
            <button onClick={handleNewChat} className="control-button new-chat">
              <RefreshCcw className="button-icon" /> New Chat
            </button>
            <button onClick={handleEndChat} className="control-button end-chat">
              <Trash className="button-icon" /> End Chat
            </button>
            <button onClick={toggleHistory} className="control-button history">
              <History className="button-icon" /> {showHistory ? "Current Chat" : "History"}
            </button>
          </div>

          {showHistory ? (
            <div className="history-container">
              {chatHistory.length > 0 ? (
                chatHistory.map((chat) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="history-item"
                    onClick={() => loadChat(chat)}
                  >
                    <span>{chat.title}</span>
                  </motion.div>
                ))
              ) : (
                <div className="no-history">No chat history available.</div>
              )}
            </div>
          ) : (
            <>
              <div className="messages-container">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`message ${message.isBot ? 'bot' : 'user'}`}
                  >
                    <div 
                      className="message-content"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="loading-indicator">
                    <motion.div className="loading-dot" 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                    <motion.div className="loading-dot"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                    />
                    <motion.div className="loading-dot"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                    />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="predefined-questions">
                {PREDEFINED_QUESTIONS.map((q, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePredefinedQuestion(q)}
                    className="predefined-button"
                    disabled={isLoading}
                  >
                    {q.question}
                  </motion.button>
                ))}
              </div>

              <div className="chat-input-container">
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about coffee..."
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="send-button"
                    aria-label="Send message"
                  >
                    <Send />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;