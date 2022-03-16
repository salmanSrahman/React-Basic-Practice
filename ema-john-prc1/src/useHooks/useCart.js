import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    console.log(savedCart);
  }, [products]);
};
