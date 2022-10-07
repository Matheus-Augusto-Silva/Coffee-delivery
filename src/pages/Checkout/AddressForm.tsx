import { FileSearch } from "phosphor-react";
import React, { useContext, useEffect } from "react";

import { AddressAndPaymentProvider } from "../../contexts/AddressAndPaymentMethodContext";
import { FormContent } from "./Styled";

export const AddressForm = () => {
  const useAddressAndPaymentProvider = useContext(AddressAndPaymentProvider);

  const { completeAddress, setCompleteAddress } = useAddressAndPaymentProvider;

  const [zipCode, setZipCode] = React.useState("");

  useEffect(() => {
    if (zipCode.length === 8 && zipCode !== "00000000") {
      fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then(response => response.json())
        .then(data => {
          setCompleteAddress(data);
        });
    }
  }, [zipCode]);

  return (
    <FormContent>
      <div>
        <input
          className="zip"
          type="text"
          placeholder="CEP"
          onChange={e => setZipCode(e.target.value)}
        />
      </div>
      <input
        className="street"
        type="text"
        placeholder="Rua"
        readOnly
        value={completeAddress?.logradouro}
      />
      <div className="form-group">
        <input
          className="number"
          type="text"
          placeholder="Número"
          onChange={e => {
            setCompleteAddress({ ...completeAddress, numero: e.target.value });
          }}
        />
        <input
          className="complement"
          type="text"
          placeholder="Complemento"
          onChange={e => {
            setCompleteAddress({
              ...completeAddress,
              complemento: e.target.value,
            });
          }}
        />
      </div>

      <div className="form-group">
        <input
          className="neighborhood"
          type="text"
          placeholder="Bairro"
          readOnly
          value={completeAddress?.bairro}
        />
        <input
          className="city"
          type="text"
          placeholder="Cidade"
          readOnly
          value={completeAddress?.localidade}
        />
        <input
          className="state"
          type="text"
          placeholder="UF"
          readOnly
          value={completeAddress?.uf}
        />
      </div>
    </FormContent>
  );
};
