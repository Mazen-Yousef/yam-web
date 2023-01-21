import { createContext, useState, useEffect } from 'react';

// helper Add
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// helper Remove
const removeCartItem = (cartItems, cartItemToRemove) => {

  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
// helper3
const clearCartItem = (cartItems,cartItemToClear) => 
      cartItems.filter((cartItem)=>
      cartItem.id !== cartItemToClear.id  ); 
      


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartItemsTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemsCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartItemsTotal(newCartTotal);
  }, [cartItems]);



  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const removeItemToCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
  
    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItemsCount,
    cartItemsTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};