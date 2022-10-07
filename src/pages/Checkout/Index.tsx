import { CurrencyDollar, MapPinLine } from "phosphor-react";
import React, { useContext, useState } from "react";
import { cartProductsProvider } from "../../contexts/cartProductsContext";
import { CheckoutContent } from "./Styled";

import { AddressForm } from "./AddressForm";
import { PaymentMethods } from "./PaymentMethods";
import { SelectedCoffes } from "./SelectedCoffes";

export const Checkout = () => {
  return (
    <CheckoutContent>
      <div className="checkout-content-left">
        <h1>Complete seu pedido</h1>
        <div className="address-info">
          <div className="address-title">
            <MapPinLine size={24} color="#C47F17" />
            <div className="address-and-payment-info-text">
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <AddressForm />
        </div>
        <div className="payment-info">
          <PaymentMethods />
        </div>
      </div>

      <div className="checkout-content-right">
        <SelectedCoffes />
      </div>
    </CheckoutContent>
  );
};
