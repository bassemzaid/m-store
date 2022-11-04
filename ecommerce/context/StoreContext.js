import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StoreContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [tQuantity, setTQuantity] = useState(0);
  const [produc, setProduc] = useState(1);

  const removeItem = (product) => {
    const clickedItem = items.find((item) => item._id === product._id);
    const newItems = items.filter((item) => item._id !== product._id);
    setPrice((prev) => prev - clickedItem.price * clickedItem.quantity);
    setTQuantity((prev) => prev - clickedItem.quantity);
    setItems(newItems);

    // console.log(typeof clickedItem.quantity);
  };

  const cartQuantity = (id, value) => {
    const clickedItem = items.find((item) => item._id === id);
    const index = items.findIndex((product) => product._id === id);

    const newItems = items.filter((item) => item._id !== id);

    if (value === "inc") {
      setItems([
        ...newItems,
        { ...clickedItem, quantity: Number(clickedItem.quantity) + 1 },
      ]);
      setPrice((prev) => prev + clickedItem.price);
      setTQuantity((prev) => prev + 1);
    } else if (value === "dec") {
      if (clickedItem.quantity > 1) {
        setItems([
          ...newItems,
          { ...clickedItem, quantity: Number(clickedItem.quantity) - 1 },
        ]);

        setPrice((prev) => prev - clickedItem.price);
        setTQuantity((prev) => prev - 1);
      }
    }
  };

  // Logic//
  const AddItem = (product, quantity) => {
    const cheacked = items.find((item) => item._id === product._id);
    setPrice((prev) => prev + product.price * quantity);
    setTQuantity((prev) => prev + quantity);
    product.quantity = 0;
    if (cheacked) {
      const Updated = items.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: Number(cartItem.quantity) + quantity,
          };
      });
      setItems(Updated);
    } else {
      product.quantity += quantity;
      setItems([...items, { ...product }]);
    }
    toast(`${produc} ${product.name} added to cart`, {
      icon: "👏",
      style: {
        borderRadius: "8px",
        background: "#222",
        color: "#fff",
      },
    });
    setProduc(1);
    // localStorage.setItem("cart", JSON.stringify(items));
    // setItems(items);
    // console.log(items);
  };

  const increase = () => {
    setProduc((prev) => prev + 1);
  };
  const decrease = () => {
    setProduc((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        show,
        items,
        price,
        tQuantity,
        produc,
        increase,
        decrease,
        AddItem,
        setShow,
        cartQuantity,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStoreContext = () => useContext(Context);
