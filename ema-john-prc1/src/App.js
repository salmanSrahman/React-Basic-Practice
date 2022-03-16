import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from "./Components/Inventory/Inventory";
import Cart from "./Components/Cart/Cart";
import DelivaryMessage from "./Components/DelivaryMessage/DelivaryMessage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="orderreview" element={<OrderReview />}></Route>
          <Route path="inventory" element={<Inventory />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="delivarymessage" element={<DelivaryMessage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
