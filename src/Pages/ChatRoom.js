import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");

  //extract user from UserContext
  const { user } = useContext(UserContext);

  //use navigate hook
  const redirectTo = useNavigate();

  useEffect(() => {
    if (user === "") {
      redirectTo("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, userName + ": " + newMessage]);
    setNewMessage("");
  };

  return (
    <div>
      <h2 className="text-center">My prediction for {props.coin.name}:</h2>
      <br></br>
      <form className="text-center" onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <input
          className="input-chat text-start"
          type="text"
          placeholder="my prediction"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="inputbutton" type="submit">
          Comment
        </button>
        <br></br>
        <br></br>
        <div>
          {messages.map((message, index) => {
            const [userName, messageContent] = message.split(":");
            return (
              <h3 className="text-center" key={index}>
                {user.displayName}: {messageContent}
              </h3>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
