import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../useHooks/useCart";
import useProduct from "../../useHooks/useProduct";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const navigate = useNavigate();
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOrder = () => {
    navigate("/delivarymessage");
    setCart([]);
    clearTheCart();
  };

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.key}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button className="btn-regular" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
