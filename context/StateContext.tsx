"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { toast } from "react-hot-toast";

import type { CartItem, Product } from "../types/sanity";

interface StateContextValue {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  toggleCartItemQuantity: (id: string, value: "inc" | "dec") => void;
  onRemove: (product: CartItem) => void;
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setTotalQuantities: Dispatch<SetStateAction<number>>;
}

const Context = createContext<StateContextValue | undefined>(undefined);

const PRODUCT_ITEMS = "cart_product_items";
const PRODUCT_PRICE = "cart_product_price";
const PRODUCT_QTY = "cart_product_qty";

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(PRODUCT_ITEMS) || "[]") as CartItem[];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem(PRODUCT_PRICE) || "0", 10);
  });
  const [totalQuantities, setTotalQuantities] = useState(() => {
    if (typeof window === "undefined") return 0;
    return parseInt(localStorage.getItem(PRODUCT_QTY) || "0", 10);
  });
  const [qty, setQty] = useState(1);

  const addToLocalStorage = (product: CartItem[]) => {
    localStorage.setItem(PRODUCT_ITEMS, JSON.stringify(product));
  };

  const addPriceToLocalStorage = (price: number) => {
    localStorage.setItem(PRODUCT_PRICE, String(price));
  };

  const addQtyToLocalStorage = (quantity: number) => {
    localStorage.setItem(PRODUCT_QTY, String(quantity));
  };

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id,
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity,
    );
    addPriceToLocalStorage(totalPrice + product.price * quantity);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    addQtyToLocalStorage(totalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
      addToLocalStorage(updatedCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, quantity }];
      setCartItems(newCartItems);
      addToLocalStorage(newCartItems);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product: CartItem) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (!foundProduct) return;

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity,
    );
    addPriceToLocalStorage(
      totalPrice - foundProduct.price * foundProduct.quantity,
    );

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity,
    );
    addQtyToLocalStorage(totalQuantities - foundProduct.quantity);

    setCartItems(newCartItems);
    addToLocalStorage(newCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: "inc" | "dec") => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    if (!foundProduct || index < 0) return;

    const newCartItems = [...cartItems];

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

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

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

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStateContext must be used within StateContext");
  }
  return context;
};
