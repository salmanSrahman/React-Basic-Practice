import React from "react";
import useCart from "../../useHooks/useCart";
import useProduct from "../../useHooks/useProduct";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const [products] = useProduct();
  const [cart] = useCart(products);

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {cart.map((product) => (
            <ReviewItem key={product.key} product={product}></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
