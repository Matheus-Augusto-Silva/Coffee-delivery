import { useContext } from "react";
import { cartProductsProvider } from "../../contexts/cartProductsContext";
import { WithProducts } from "./WithProducts";
import { Product, SelectedCoffees } from "./Styled";
import { WithoutProduct } from "./WithoutProduct";

export const SelectedCoffes = () => {
  const useCartContext = useContext(cartProductsProvider);

  const { allCartProducts } = useCartContext;

  return (
    <SelectedCoffees>
      <h1>Cafés selecionados</h1>
      <Product>
        {allCartProducts.length > 0 ? <WithProducts /> : <WithoutProduct />}
      </Product>
    </SelectedCoffees>
  );
};
