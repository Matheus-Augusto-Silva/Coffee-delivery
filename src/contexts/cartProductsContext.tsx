import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface cartSelectedProductsType {
  allCartProducts: any;
  setAllCartProducts: any;
  totalCartQuantity: any;
  setTotalCartQuantity: any;
}

const cartProductsProvider = createContext<cartSelectedProductsType>(
  {} as cartSelectedProductsType
);

const CartProductsContext = ({ children }: { children: ReactNode }) => {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  return (
    <cartProductsProvider.Provider
      value={{
        allCartProducts,
        setAllCartProducts,
        totalCartQuantity,
        setTotalCartQuantity,
      }}
    >
      {children}
    </cartProductsProvider.Provider>
  );
};

export { CartProductsContext, cartProductsProvider };
