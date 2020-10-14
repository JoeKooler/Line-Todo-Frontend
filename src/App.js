import React from "react";
import Todo from "./Components/Todo";
import LiffLogin from "./Components/Login/LiffLogin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LiffLogin>
        <Todo />
      </LiffLogin>
      <div className="BGCredit">
        Photo by eberhard grossgasteiger from Pexels
      </div>
    </div>
  );
}

export default App;
