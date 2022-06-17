import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// Create context
const Context = createContext();

// Export State Context
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const PRODUCT_ITEMS = "cart_product_items";
  const PRODUCT_PRICE = "cart_product_price";
  const PRODUCT_QTY = "cart_product_qty";

  // Get Cart Items from localStorage each time page is loaded
  useEffect(() => {
    const cart_product_items = JSON.parse(
      localStorage.getItem(PRODUCT_ITEMS) || "[]"
    );
    const cart_product_price = parseInt(
      localStorage.getItem(PRODUCT_PRICE) || 0
    );
    const cart_product_qty = parseInt(localStorage.getItem(PRODUCT_QTY) || 0);

    setCartItems(cart_product_items);
    setTotalPrice(cart_product_price);
    setTotalQuantities(cart_product_qty);
  }, []);

  // add items
  const addToLocalStorage = (product) => {
    localStorage.setItem(PRODUCT_ITEMS, JSON.stringify(product));
  };

  // add total price
  const addPriceToLocalStorage = (price) => {
    localStorage.setItem(PRODUCT_PRICE, price);
  };

  // add total quantity
  const addQtyToLocalStorage = (qty) => {
    localStorage.setItem(PRODUCT_QTY, qty);
  };

  // when new item is added
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    addPriceToLocalStorage(totalPrice + product.price * quantity);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    addQtyToLocalStorage(totalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      addToLocalStorage(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
      addToLocalStorage([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  // when existing item is removed
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );

    addPriceToLocalStorage(
      totalPrice - foundProduct.price * foundProduct.quantity
    );

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );

    addQtyToLocalStorage(totalQuantities - foundProduct.quantity);

    setCartItems(newCartItems);
    addToLocalStorage(newCartItems);
  };

  // increment and decrement each item quantity
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems;

    if (value === "inc") {
      newCartItems.splice(index, 1, {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      });

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      addPriceToLocalStorage(totalPrice + foundProduct.price);

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      addQtyToLocalStorage(totalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 1, {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        });

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        addPriceToLocalStorage(totalPrice - foundProduct.price);

        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        addQtyToLocalStorage(totalQuantities - 1);
      }
    }

    setCartItems(newCartItems);
    addToLocalStorage(newCartItems);
  };

  // increment qty
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // decrement qty
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
