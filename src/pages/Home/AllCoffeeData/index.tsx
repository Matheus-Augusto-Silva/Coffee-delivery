import React, { useContext, useEffect, useState } from "react";
import { AllCoffeeContainer } from "./styles";

import { ItemData } from "./ItemData";
import { typesOfCoffeeProvider } from "../../../contexts/allCoffeesContext";

interface coffeeType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string[];
}

export const AllCofeeData = () => {
  const useTypesContext = useContext(typesOfCoffeeProvider);

  const { typesOfCoffee } = useTypesContext;

  return (
    <AllCoffeeContainer>
      <h1 className="title">Nossos cafés</h1>
      <div className="coffee-types">
        {typesOfCoffee?.map((typeOfCoffee: coffeeType) => (
          <ItemData typeOfCoffee={typeOfCoffee} key={typeOfCoffee.id} />
        ))}
      </div>
    </AllCoffeeContainer>
  );
};
