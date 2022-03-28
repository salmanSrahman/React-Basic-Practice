import React from "react";
import "./CartDetails.css";
import { AiTwotoneDelete } from "react-icons/ai";

const CartDetails = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div>
          <h6>{name}</h6>
          <h6>${price}</h6>
        </div>
        <div>
          <AiTwotoneDelete />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
