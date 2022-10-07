import React, { useContext } from "react";
import { cartProductsProvider } from "../../contexts/cartProductsContext";
import { Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { AddressAndPaymentProvider } from "../../contexts/AddressAndPaymentMethodContext";

export const WithProducts = () => {
  const useCartContext = useContext(cartProductsProvider);

  const useAddressAndPaymentProvider = useContext(AddressAndPaymentProvider);

  const { completeAddress, payment, setCompleteAddress, setPayment } =
    useAddressAndPaymentProvider;

  const {
    allCartProducts,
    setAllCartProducts,
    totalCartQuantity,
    setTotalCartQuantity,
  } = useCartContext;

  const [entrega, setEntrega] = React.useState(3.5);

  const somar = (arr: any[]) => {
    const total = arr.reduce(
      (acc: { [x: string]: any }, { name, quantity }: any) => {
        acc[name] = (acc[name] || 0) + quantity;
        return acc;
      }, // <-- this is the accumulator
      {} // <-- this is the initial value
    );

    return Object.keys(total).map(name => ({
      name,
      quantity: total[name],
      image: arr.find((item: { name: any }) => item.name === name).image,
      price: allCartProducts
        .find((product: { name: string }) => product.name === name)
        .price.toFixed(2),
    }));
  };

  const totalOfProducts = somar(allCartProducts);

  const handleDecreaseItem = (item: any) => {
    const decreaseQuantityByOne = allCartProducts.map((product: any) => {
      if (product.name === item.name && product.quantity >= 1) {
        if (totalCartQuantity > 1) {
          setTotalCartQuantity(totalCartQuantity - 1);
        }
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    if (item.quantity > 1) {
      setAllCartProducts(decreaseQuantityByOne);
    }
  };

  const handleIncreaseItem = (item: any) => {
    const increaseQuantityByOne = allCartProducts.map((product: any) => {
      if (product.name === item.name) {
        setTotalCartQuantity(totalCartQuantity + 1);
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setAllCartProducts(increaseQuantityByOne);
  };

  const handleRemoveItem = (item: any) => {
    const removeItem = allCartProducts.filter(
      (product: any) => product.name !== item.name
    );
    setAllCartProducts(removeItem);
    setTotalCartQuantity(totalCartQuantity - item.quantity);
  };

  const handleAddCustomerData = () => {
    console.log("completeAddress", completeAddress);
    console.log("payment", payment);
  };

  const totalCartProductsPrice = totalOfProducts.reduce(
    (acc: number, { price, quantity }: any) => {
      return acc + price * quantity;
    },
    0
  );

  return (
    <>
      {totalOfProducts?.map((product: any) => (
        <div key={product.name} className="delivery-container">
          <section className="product-image-and-price">
            <img src={product.image} alt={`${product.name}`} />
            <div className="name-and-button-container">
              <p>{product.name}</p>
              <div className="product-buttons">
                <div className="button-container">
                  <button
                    onClick={() => {
                      handleDecreaseItem(product);
                    }}
                    className="increase-decrease-button"
                  >
                    -
                  </button>
                  <label>{product.quantity}</label>
                  <button
                    onClick={() => {
                      handleIncreaseItem(product);
                    }}
                    className="increase-decrease-button"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    handleRemoveItem(product);
                  }}
                  className="remove-button"
                >
                  <Trash color="var(--purple)" />
                  Remover
                </button>
              </div>
            </div>
          </section>
          <p className="price">
            R$ {(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="total-price-container">
        <div className="item-container">
          <p>Total de itens</p>
          <label>R$ {totalCartProductsPrice.toFixed(2)}</label>
        </div>

        <div className="item-container">
          <p>Entrega</p>
          <label>R$ {entrega.toFixed(2)}</label>
        </div>

        <div className="item-container">
          <p>Total</p>
          <label>
            R$ {Number(totalCartProductsPrice + entrega).toFixed(2)}
          </label>
        </div>
      </div>
      <NavLink to="/sucess" className="delivery-navlink">
        <button onClick={handleAddCustomerData}>CONFIRMAR PEDIDO</button>
      </NavLink>
    </>
  );
};
