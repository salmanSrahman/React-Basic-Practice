import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      for (const key in savedCart) {
        const storedCart = [];
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
        setCart(storedCart);
      }
    }
  }, [products]);

  return [cart];
};

export default useCart;
