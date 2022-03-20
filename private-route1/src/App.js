import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import LogIn from "./Components/LogIn/LogIn";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route to="/" element={<Home />}></Route>
          <Route to="home" element={<Home />}></Route>
          <Route to="shipping" element={<Shipping />}></Route>
          <Route to="register" element={<Register />}></Route>
          <Route to="login" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
