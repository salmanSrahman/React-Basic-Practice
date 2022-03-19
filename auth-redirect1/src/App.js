import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import { Container } from "react-bootstrap";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Container>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route
                path="/shipping"
                element={
                  <PrivateRoute>
                    <Shipping />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Container>
    </div>
  );
}

export default App;
