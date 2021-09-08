import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state

  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleTotalValue = () => {
    let total = null;

    total = cartItems.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );

    setTotalValue((prevState) => (prevState = total));
  };

  const addItemToCart = () => {
    setCartItems(
      (prevState) =>
        (prevState = [
          ...prevState,
          {
            id: uuidv4(),
            amount: 1,
            added: new Date().toLocaleDateString(),
            price: 599.0,
          },
        ])
    );
  };

  useEffect(() => {
    handleTotalValue();
  }, [cartItems]);

  const deleteItemFromCart = (id) => {
    const filteredArray = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems((prevState) => (prevState = filteredArray));
  };

  return (
    <AppContext.Provider
      value={{
        addItemToCart,
        cartItems,
        deleteItemFromCart,
        totalValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
