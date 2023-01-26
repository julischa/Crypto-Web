import React, { useState } from "react";

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div>
      <h2 className='text-center'>My {props.coin.name} prediction:</h2>
      <form className='text-center' onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className='text-center' type="submit">Comment</button>
        <div>
        {messages.map((message, index) => (
          <h3 className='text-center' key={index}>{message}</h3>
        ))}
      </div>
      </form>
    </div>
  );
};

export default ChatRoom;
