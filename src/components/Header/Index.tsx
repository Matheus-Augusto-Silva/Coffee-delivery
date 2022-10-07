import React, { useContext } from "react";
import { HeaderContainer } from "./styles";

import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import {
  ArrowArcLeft,
  ArrowCircleLeft,
  House,
  HouseSimple,
  MapPin,
} from "phosphor-react";
import { ShoppingCartSimple } from "phosphor-react";
import { cartProductsProvider } from "../../contexts/cartProductsContext";

export const Header = () => {
  const useCartContext = useContext(cartProductsProvider);
  const { totalCartQuantity } = useCartContext;

  return (
    <HeaderContainer>
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <div className="local-and-cart">
        <NavLink to="/" className="logo">
          <House size={30} />
        </NavLink>
        <div className="local">
          <MapPin size={16} color="var(--purple)" weight="fill" />
          <span>Minha localização</span>
        </div>
        <NavLink to="/checkout" className="cart">
          <ShoppingCartSimple
            size={22}
            color="var(--yellow-dark)"
            weight="fill"
          />
          <span> {totalCartQuantity > 0 ? totalCartQuantity : null}</span>
        </NavLink>
      </div>
    </HeaderContainer>
  );
};
