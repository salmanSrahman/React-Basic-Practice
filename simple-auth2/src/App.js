import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="registration" element={<Registration />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
