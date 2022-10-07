import { createContext, ReactNode, useCallback, useState } from "react";

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  complemento?: string;
  numero: string;
  uf: string;
  cep: string;
}

interface addressAndPaymentType {
  completeAddress: Address;
  payment: string;
  setCompleteAddress: (address: Address) => void;
  setPayment: (payment: string) => void;
}

const AddressAndPaymentProvider = createContext<addressAndPaymentType>(
  {} as addressAndPaymentType
);

const AddressAndPaymentContext = ({ children }: { children: ReactNode }) => {
  const [payment, setPayment] = useState("");
  const [completeAddress, setCompleteAddress] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    numero: "",
    uf: "",
    cep: "",
  });
  return (
    <AddressAndPaymentProvider.Provider
      value={{
        payment,
        completeAddress,
        setPayment,
        setCompleteAddress,
      }}
    >
      {children}
    </AddressAndPaymentProvider.Provider>
  );
};

export { AddressAndPaymentProvider, AddressAndPaymentContext };
