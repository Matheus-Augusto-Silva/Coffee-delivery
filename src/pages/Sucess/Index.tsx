import React, { useContext, useEffect } from "react";
import { AddressAndPaymentProvider } from "../../contexts/AddressAndPaymentMethodContext";
import { cartProductsProvider } from "../../contexts/cartProductsContext";
import { SucessContainer } from "./Styled";

import checkoutImage from "../../assets/checkout-image.svg";
import { MapPin, Money, Watch } from "phosphor-react";

export const Sucess = () => {
  const useAddressAndPaymentProvider = useContext(AddressAndPaymentProvider);
  const { completeAddress, payment } = useAddressAndPaymentProvider;

  const useCartContext = useContext(cartProductsProvider);

  const { setAllCartProducts, setTotalCartQuantity } = useCartContext;

  useEffect(() => {
    setAllCartProducts([]);
    setTotalCartQuantity(0);
  }, []);

  return (
    <SucessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <section>
        <div className="checkout-items">
          <div className="checkout-item">
            <MapPin size={32} color="var(--purple)" weight="fill" />
            <p>
              Entrega em{" "}
              <label>
                {completeAddress.logradouro},{completeAddress.numero} -
                <br />
                {completeAddress.complemento}
                <br />
              </label>{" "}
              {completeAddress.bairro} - {completeAddress.localidade} -{" "}
              {completeAddress.uf}
            </p>
          </div>
          <div className="checkout-item">
            <Watch size={32} color="blue" />
            <div>
              <label>Previsão de entrega</label>
              <p>25 min-30 min</p>
            </div>
          </div>

          <div className="checkout-item">
            <Money size={32} color="green" />
            <div>
              <p>Pagamento na entrega</p>
              <p>{payment}</p>
            </div>
          </div>
        </div>

        <div className="image-checkout">
          <img src={checkoutImage} alt="Sucess" />
        </div>
      </section>
    </SucessContainer>
  );
};
