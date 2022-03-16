import React from "react";
import useProduct from "../../useHooks/useProduct";
import "./OrderReview.css";

const OrderReview = () => {
  const [products] = useProduct();

  return (
    <div>
      {products.length}
      <h1>Here is order review.</h1>
    </div>
  );
};

export default OrderReview;
