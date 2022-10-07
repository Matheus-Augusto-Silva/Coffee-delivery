import { createContext, ReactNode, useCallback, useState } from "react";

import { typesOfCoffeeMock } from "../mocked";

interface typesOfCoffeType {
  typesOfCoffee: any;
  setTypesOfCoffee: any;
}

const typesOfCoffeeProvider = createContext<typesOfCoffeType>(
  {} as typesOfCoffeType
);

const TypesOfCoffeeContext = ({ children }: { children: ReactNode }) => {
  const [typesOfCoffee, setTypesOfCoffee] = useState(typesOfCoffeeMock);

  return (
    <typesOfCoffeeProvider.Provider
      value={{
        typesOfCoffee,
        setTypesOfCoffee,
      }}
    >
      {children}
    </typesOfCoffeeProvider.Provider>
  );
};

export { typesOfCoffeeProvider, TypesOfCoffeeContext };
