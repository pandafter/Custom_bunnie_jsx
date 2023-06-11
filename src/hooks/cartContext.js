import {  useState} from 'react';



const useCartContext = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToStore = (item) => {
    setStoreItems([...storeItems, item]);
  };

  const addToCart =(item) => {
    setCartItems((cartItems) => [...cartItems, item]);
    console.log('item en contexto',item);
    
  };


  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };
  console.log('Cart items en contexto:', cartItems);

  return {
    storeItems,
    cartItems,
    addToStore,
    addToCart,
    removeFromCart,
  };


  
};

export default useCartContext;