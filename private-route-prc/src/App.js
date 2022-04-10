import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Order from "./Components/Order/Order";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="order" element={<Order></Order>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
