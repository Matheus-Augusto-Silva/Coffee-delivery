import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import React, { useContext } from "react";
import { AddressAndPaymentProvider } from "../../contexts/AddressAndPaymentMethodContext";
import { PaymentMethod } from "./Styled";

export const PaymentMethods = () => {
  const useAddressAndPaymentContext = useContext(AddressAndPaymentProvider);

  const { payment, setPayment } = useAddressAndPaymentContext;

  const handlePaymentType = (e: any) => {
    setPayment(e.target.textContent);
  };

  return (
    <PaymentMethod>
      <div className="payment-title">
        <CurrencyDollar size={24} color="var(--purple)" />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="payment-methods">
        <button
          className={
            payment !== "Cartão de crédito"
              ? "payment-method"
              : "payment-method-checked"
          }
          onClick={handlePaymentType}
        >
          <CreditCard size={24} color="var(--purple)" />
          <span>Cartão de crédito</span>
        </button>
        <button
          className={
            payment !== "Cartão de débito"
              ? "payment-method"
              : "payment-method-checked"
          }
          onClick={handlePaymentType}
        >
          <Bank size={24} color="var(--purple)" />
          <span>Cartão de débito</span>
        </button>
        <button
          className={
            payment !== "Dinheiro" ? "payment-method" : "payment-method-checked"
          }
          onClick={handlePaymentType}
        >
          <Money size={24} color="var(--purple)" />
          <span>Dinheiro</span>
        </button>
      </div>
    </PaymentMethod>
  );
};
