import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from "./Components/Inventory/Inventory";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="orderReview" element={<OrderReview />}></Route>
          <Route path="inventory" element={<Inventory />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
