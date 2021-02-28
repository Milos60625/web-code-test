import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'REMOVE':
      const newCopy = [...state];
      newCopy.splice(action.index, 1);
      return newCopy;
    case 'EDIT':
      return state.map((item) => {
        if (item.itemNumber === action.item.itemNumber) {
          item.qty = action.item.qty;
        }
        return item;
      });
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
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
