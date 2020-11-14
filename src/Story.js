import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

const Story = ({ image, profilesrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__Avatar" src={profilesrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
