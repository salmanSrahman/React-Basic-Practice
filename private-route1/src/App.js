import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import LogIn from "./Components/LogIn/LogIn";
import Shipping from "./Components/Shipping/Shipping";
import Header from "./Components/Header/Header";
import { Container } from "react-bootstrap";
import AuthProvider from "./Components/Context/AuthProvider";

function App() {
  return (
    <div>
      <Container>
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="shipping" element={<Shipping />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="login" element={<LogIn />}></Route>
            </Routes>
          </Router>
        </AuthProvider>
      </Container>
    </div>
  );
}

export default App;
