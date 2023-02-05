import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { db } from "../firebase";

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // extract user from UserContext
  const { user } = useContext(UserContext);

  // use navigate hook
  const redirectTo = useNavigate();

  useEffect(() => {
    if (!user) {
      redirectTo("/");
    }

    const unsubscribe = db
      .collection("messages")
      .where("coinName", "==", props.coin.name)
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });

    return () => unsubscribe();
  }, [props.coin.name, user, redirectTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      coinName: props.coin.name,
      userDisplayName: user.displayName,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div>
      <h2 className="text-center">My prediction for {props.coin.name}:</h2>
      <br />
      <form className="text-center" onSubmit={handleSubmit}>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </div>
        <br />
        <br />
        <div>
          {messages.map((message) => (
            <h3 className="text-center" key={message.id}>
              {message.userDisplayName}: {message.message}
            </h3>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
