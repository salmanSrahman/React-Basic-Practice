import React from "react";
import './DelivaryMessage.css'
import message from "../../images/giphy.gif";

const DelivaryMessage = () => {
  return (
    <div className="delivary-part">
      <img src={message} alt="" />
    </div>
  );
};

export default DelivaryMessage;
