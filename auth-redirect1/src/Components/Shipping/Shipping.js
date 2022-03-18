import React from "react";
import { Navigate } from "react-router-dom";

const Shipping = ({user}) => {
if(!user){
 return <Navigate to="/login" replace />;
}
  return (
    <div>
      <h1>Here Is Shipping.</h1>
    </div>
  );
};

export default Shipping;
