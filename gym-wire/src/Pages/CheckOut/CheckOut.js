import React from "react";
import "./CheckOut.css";
import check from "../../images/check out.gif";

const CheckOut = () => {
  return (
    <div className="my-5 py-5 check">
      <h3 className="text-center my-3">
        Congratulations! Check out is processing---
      </h3>
      <div className="d-flex justify-content-center">
        <img src={check} alt="" />
      </div>
    </div>
  );
};

export default CheckOut;
