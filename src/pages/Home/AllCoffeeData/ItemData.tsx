import { it } from "node:test";
import { ShoppingCart } from "phosphor-react";

import React, { useContext, useEffect } from "react";
import { typesOfCoffeeProvider } from "../../../contexts/allCoffeesContext";
import { cartProductsProvider } from "../../../contexts/cartProductsContext";

interface typeOfCoffeeProps {
  typeOfCoffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    type: string[];
  };
}

export const ItemData = ({ typeOfCoffee }: typeOfCoffeeProps) => {
  const [itemQuantity, setItemQuantity] = React.useState(0);

  const useCartContext = useContext(cartProductsProvider);
  const {
    allCartProducts,
    setAllCartProducts,
    totalCartQuantity,
    setTotalCartQuantity,
  } = useCartContext;

  const typesOfCoffeesContext = useContext(typesOfCoffeeProvider);

  const { typesOfCoffee, setTypesOfCoffee } = typesOfCoffeesContext;

  function handleAddItem(item: {
    id: any;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    type?: string[];
    actualQuantity?: any;
  }) {
    if (itemQuantity <= item.actualQuantity) {
      setItemQuantity(itemQuantity + 1);
    }

    const decreaseTotalItems = typesOfCoffee.map(
      (coffee: {
        id: any;
        actualQuantity: number;
        initialQuantity: number;
      }) => {
        if (
          coffee.id === item.id &&
          coffee.actualQuantity <= coffee.initialQuantity
        ) {
          coffee.actualQuantity = coffee.actualQuantity - 1;
        }
        return coffee;
      }
    );

    setTypesOfCoffee(decreaseTotalItems);
  }

  function handleRemoveItem(item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    type: string[];
  }) {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);

      const increaseTotalItems = typesOfCoffee.map(
        (coffee: {
          id: any;
          actualQuantity: number;
          initialQuantity: number;
        }) => {
          if (
            coffee.id === item.id &&
            coffee.actualQuantity < coffee.initialQuantity
          ) {
            coffee.actualQuantity = coffee.actualQuantity + 1;
          }
          return coffee;
        }
      );

      setTypesOfCoffee(increaseTotalItems);
    }
  }

  function handleAddToCart(item: any) {
    const { id, name, price, image } = typeOfCoffee;
    const itemToCart = {
      id,
      name,
      price,
      image,
      quantity: itemQuantity,
    };
    if (itemQuantity > 0 && itemQuantity <= item.actualQuantity) {
      setAllCartProducts([...allCartProducts, itemToCart]);
      setTotalCartQuantity(totalCartQuantity + itemQuantity);
    }
  }

  return (
    <div className="coffee-type">
      <img src={typeOfCoffee.image} alt={typeOfCoffee.name} />
      <div className="coffee-type-name">
        {typeof typeOfCoffee.type === "object" ? (
          typeOfCoffee?.type.map((type: any) => (
            <label key={type}>{type}</label>
          ))
        ) : (
          <label>{typeOfCoffee.type}</label>
        )}
      </div>
      <label className="coffee-name">{typeOfCoffee.name}</label>
      <label className="coffee-description">{typeOfCoffee.description}</label>
      <div className="price-div">
        <span>
          R${" "}
          <label className="coffee-price">
            {typeOfCoffee.price.toFixed(2)}
          </label>
        </span>
        <div className="quantity-div">
          <button
            className="increase-decrease-button"
            onClick={() => handleRemoveItem(typeOfCoffee)}
          >
            -
          </button>
          <label>{itemQuantity}</label>
          <button
            className="increase-decrease-button"
            onClick={() => handleAddItem(typeOfCoffee)}
          >
            +
          </button>
        </div>
        <button
          className="shopping-cart"
          onClick={() => {
            handleAddToCart(typeOfCoffee);
            setItemQuantity(0);
          }}
        >
          <ShoppingCart size={24} weight="fill" />
        </button>
      </div>
    </div>
  );
};
