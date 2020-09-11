import React from "react";
import "./App.css";

//Components
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
