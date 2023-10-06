import React from "react";
import "./App.css";
import LoginLeft from "./components/LoginLeft";
import LoginRight from "./components/LoginRight.js";
function App() {
  return (
    <div className="App w-3/5 h-4/5 flex flex-row">
      <LoginLeft />
      <LoginRight />
    </div>
  );
}

export default App;
