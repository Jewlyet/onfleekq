import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [score, setScore] = useState([]);

  return (
    <ShopContext.Provider value={{ score, setScore }}>
      {children}
    </ShopContext.Provider>
  );
};
