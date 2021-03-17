import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widgets">
      <iframe
      title='Face Book Page'
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FProgrammingwithumar%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1484674941712520"
        width="250"
        height="100%"
        style={{ border: "none", overflow: "hidden",}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
