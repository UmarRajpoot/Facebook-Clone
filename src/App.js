import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Story from "./Story";
import StoryReel from "./StoryReel";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
