import React, { useReducer, useContext, createContext } from 'react';

const CartDispatchContext = createContext();
const CartStateContext = createContext();

const reducer = (state, action) => {
  let cart;
  switch (action.type) {
    case 'ADD':
      cart = [...state, action.item];
      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    case 'REMOVE':
      cart = [...state];
      cart.splice(action.index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    case 'EDIT':
      cart = state.map((item) => {
        if (item.itemNumber === action.item.itemNumber) {
          item.quantity = action.item.quantity;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    default:
      return state;
  }
};

const storage = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, storage);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
