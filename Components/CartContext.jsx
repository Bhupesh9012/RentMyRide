import React, { createContext, useState, useContext } from 'react';
import {toast} from 'react-toastify';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (vehicle, duration, price) => {
    const totalPrice = Number(duration) * Number(price);
    const newItem = { vehicle, duration: Number(duration), pricePerHour: Number(price), totalPrice };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (indexToRemove) => {
    toast.success('Rental duration updated');
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };
  const updateDuration = (index, newDuration) => {
  setCart((prevCart) =>
    prevCart.map((item, i) =>
      i === index
        ? {
            ...item,
            duration: newDuration,
            totalPrice: newDuration * item.pricePerHour,
          }
        : item
    )
  );
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateDuration }}>
      {children}
    </CartContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
