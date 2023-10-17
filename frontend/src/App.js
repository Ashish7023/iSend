import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/Chatpage";
import Loginpage from "./pages/Loginpage";
import Signpage from "./pages/Signpage";
function App() {
  return (
    <div className="App w-3/5 h-4/5 flex flex-row">
      <Routes>
        <Route path="/" element={<Loginpage />} exact />
        <Route path="/sign" element={<Signpage />} exact />
        <Route path="/chats" element={<ChatPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
