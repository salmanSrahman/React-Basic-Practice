import React from "react";
import useCart from "../../useHooks/useCart";
import useProduct from "../../useHooks/useProduct";
import Cart from "../Cart/Cart";
import "./OrderReview.css";

const OrderReview = () => {
  const [products] = useProduct();
  const [cart] = useCart(products);
  console.log(cart);

  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
           {
            products.map(product => )
           }
        
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
