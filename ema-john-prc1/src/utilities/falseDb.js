const addToDb = (id) => {
  const exist = localStorage.setItem("shopping-cart");
  let shopping_cart = {};
  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    const shopping_cart = JSON.parse(exist);
    if(shopping_cart[id]){
     const newCount = shopping_cart[id] + 1;
    shopping_cart[id] = newCount;
    }
    else{
    shopping_cart[id] = 1;
    }
   
  }
};

const removeFromDb = id =>{
   const exist = localStorage.getItem("shopping-cart");
   if(!exist)
}


export { addToDb };
