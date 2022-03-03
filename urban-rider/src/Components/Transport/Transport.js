import React from "react";

const Transport = ({ transport }) => {
  const { carName, img } = transport;
  return (
    <div className="col-xl-3">
      <div className="tranport-card">
        <img src={img} alt="" />
        <h3>{carName}</h3>
      </div>
    </div>
  );
};

export default Transport;
