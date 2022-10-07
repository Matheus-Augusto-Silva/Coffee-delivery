import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { TypesOfCoffeeContext } from "./contexts/allCoffeesContext";
import { CartProductsContext } from "./contexts/cartProductsContext";
import { AddressAndPaymentContext } from "./contexts/AddressAndPaymentMethodContext";

export default function App() {
  return (
    <div className="App">
      <TypesOfCoffeeContext>
        <CartProductsContext>
          <AddressAndPaymentContext>
            <GlobalStyle />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </AddressAndPaymentContext>
        </CartProductsContext>
      </TypesOfCoffeeContext>
    </div>
  );
}
