import React, { useState } from 'react';
import { Send, Hash, MoreVertical, FileText, Smile } from 'lucide-react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey team, I updated the API documentation.', time: '10:00 AM', isMine: false },
    { id: 2, sender: 'You', text: 'Great, I will start reviewing it now.', time: '10:05 AM', isMine: true },
    { id: 3, sender: 'Bob', text: 'Does anyone have the link to the Figma file?', time: '10:30 AM', isMine: false }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { 
      id: Date.now(), sender: 'You', text: newMessage, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), isMine: true 
    }]);
    setNewMessage('');
  };

  return (
    <div className="chat-container card-glass">
      {/* Sidebar Channels */}
      <div className="chat-sidebar border-right">
        <div className="chat-sidebar-header">
          <h3>Conversations</h3>
        </div>
        <div className="channel-list">
          <div className="channel active"><Hash size={16}/> general</div>
          <div className="channel"><Hash size={16}/> ai-image-gen-project</div>
          <div className="channel"><Hash size={16}/> random</div>
        </div>
        
        <div className="chat-sidebar-header mt-4">
          <h3>Direct Messages</h3>
        </div>
        <div className="dm-list">
          <div className="dm-user"><div className="avatar micro">A</div> Alice</div>
          <div className="dm-user"><div className="avatar micro">B</div> Bob Developer</div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="channel-info">
            <h3><Hash size={20}/> general</h3>
            <p className="text-muted small">Company-wide discussion channel.</p>
          </div>
          <button className="icon-btn"><MoreVertical size={20}/></button>
        </div>

        <div className="message-history">
          {messages.map(msg => (
            <div key={msg.id} className={`message-row ${msg.isMine ? 'mine' : ''}`}>
               {!msg.isMine && <div className="avatar small-avatar">{msg.sender[0]}</div>}
               <div className="message-box">
                 <div className="msg-info">
                   <span className="msg-sender">{msg.sender}</span>
                   <span className="msg-time">{msg.time}</span>
                 </div>
                 <div className={`msg-bubble ${msg.isMine ? 'primary-bg' : 'glass-bg'}`}>
                    {msg.text}
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <form className="chat-form" onSubmit={sendMessage}>
            <button type="button" className="icon-btn text-muted"><FileText size={20}/></button>
            <input 
              type="text" 
              placeholder="Message #general..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="button" className="icon-btn text-muted"><Smile size={20}/></button>
            <button type="submit" className="btn-primary icon-btn-solid"><Send size={18}/></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
