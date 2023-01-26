import React, { useState } from "react";

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, userName + ': ' + newMessage]);
    setNewMessage("");
  };

  return (
    <div>
      <h2 className='text-center'>My prediction for {props.coin.name}:</h2>
      <br></br>
      <form className='text-center' onSubmit={handleSubmit}>
        <input className="input-chat text-center" type="text" placeholder="my Nickname" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <br></br>
        <br></br>
        <input
          className="input-chat text-center"
          type="text"
          placeholder="my prediction"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className='inputbutton' type="submit">Comment</button>
        <br></br><br></br>
        <div>
        {messages.map((message, index) => {
            const [userName, messageContent] = message.split(':')
            return (
              <h3 className='text-center' key={index}>{userName}: {messageContent}</h3>
            )
          })}
      </div>
      </form>
    </div>
  );
};

export default ChatRoom;