import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { db } from "../config/firebaseConfig";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  //extract user from UserContext
  const { user } = useContext(UserContext);
  //console.log(props.coin);

  //use navigate hook
  const redirectTo = useNavigate();

  useEffect(() => {
    if (user === "") {
      redirectTo("/");
    }
  }, [user]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const q = query(collection(db, "Chat", props.coin.id, "Comments"));

        const querySnapshot = await getDocs(q);
        const commentsArray = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          commentsArray.push(doc.data());
        });
        setMessages(commentsArray);
      } catch (mistake) {
        console.log(mistake);
      }
    };

    getComments();
  }, [props.coin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, userName + ": " + newMessage]);
    setNewMessage("");

    const messageObject = { author: user.email, text: newMessage };
    try {
      await addDoc(
        collection(db, "Chat", props.coin.id, "Comments"),
        messageObject
      );
      console.log("submitted");
    } catch (mistake) {
      console.log(mistake);
    }
  };

  return (
    <div>
      <h2 className="text-center">My prediction for {props.coin.name}:</h2>
      <br></br>
      <form className="text-center" onSubmit={handleSubmit}>
        <br></br>
        <br></br>
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
        <br></br>
        <br></br>
        <div>
          {messages.map((message, index) => {
            //const [userName, messageContent] = message.split(":");
            return (
              <h3 className="text-center" key={index}>
                {message.author}: {message.text}
              </h3>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
