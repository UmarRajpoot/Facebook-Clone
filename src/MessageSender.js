import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./Firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imgUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // we put the db here
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    });

    //Reset the Values
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind ${user.displayName}`}
          />
          <input
            placeholder="image URL(Optional)"
            value={imgUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
