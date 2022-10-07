import React from "react";

import { TitleContainer, Description, Circle } from "./styled";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import CoffeeImg from "../../../assets/coffee-delivery.svg";

export const HomePrincipalContent = () => {
  return (
    <TitleContainer>
      <div className="title-content">
        <div className="title-text">
          <span className="title">
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </span>
          <span className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </span>
          <Description>
            <div className="item-section">
              <Circle backgroundColor="var(--yellow-dark)">
                <ShoppingCart size={18} weight="fill" color="#ffffff" />
              </Circle>
              Compra simples e segura
            </div>
            <div className="item-section">
              <Circle backgroundColor="var(--base-text)">
                <Package size={18} weight="fill" color="#ffffff" />
              </Circle>
              Embalagem mantém o café intacto
            </div>
            <div className="item-section">
              <Circle backgroundColor="var(--yellow)">
                <Timer size={18} weight="fill" color="#ffffff" />
              </Circle>
              Entrega rápida e rastreada
            </div>
            <div className="item-section">
              <Circle backgroundColor="var(--purple)">
                <Coffee size={18} weight="fill" color="#ffffff" />
              </Circle>
              O café chega fresquinho até você
            </div>
          </Description>
        </div>
        <div className="title-image">
          <img src={CoffeeImg} alt="Coffee Delivery" className="image-coffee" />
        </div>
      </div>
    </TitleContainer>
  );
};
