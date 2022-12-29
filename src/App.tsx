import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Join } from "./components/Join";
import { RoomContext } from "./context/RoomContext";

function App() {
  const { ws } = useContext(RoomContext);
  const joinRoom = () => {
    ws.emit("join-room");
  };
  return (
    <div
      onClick={joinRoom}
      className="App flex items-center justify-center w-screen h-screen"
    >
      <Join />
    </div>
  );
}

export default App;
