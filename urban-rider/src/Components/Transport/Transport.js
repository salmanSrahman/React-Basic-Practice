import React from "react";
import "./Transport.css";

const Transport = ({ transport }) => {
  const { carName, img } = transport;
  return (
    <div className="col-xl-3">
      <div className="transport-card">
        <img src={img} alt="" />
        <h3>{carName}</h3>
      </div>
    </div>
  );
};

export default Transport;
