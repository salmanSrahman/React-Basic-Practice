import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="inventory" element={<Inventory />}></Route>
          <Route path="notfound" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
