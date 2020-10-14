import React from "react";
import Todo from "./Components/Todo";
import Login from "./Components/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <div className="BGCredit">
        Photo by eberhard grossgasteiger from Pexels
      </div>
    </div>
  );
}

export default App;
