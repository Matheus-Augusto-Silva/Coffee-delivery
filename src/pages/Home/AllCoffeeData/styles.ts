import styled from "styled-components";

export const AllCoffeeContainer = styled.div`
  padding: 4rem 0;
  height: 100vh;

  .title {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3rem;
    color: var(--base-subtitle);
  }

  .coffee-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .coffee-type {
    display: flex;
    flex-direction: column;
    width: 16rem;
    padding: 0 1.25rem 1.25rem 1.25rem;
    background-color: var(--base-card);
    margin: 0 0 2.5rem 0;
    align-items: center;
    border-radius: 6px 36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  img {
    width: 7.5rem;
    margin: -1rem auto 0 auto;
  }

  .coffee-type-name {
    font-family: "Baloo 2";
    display: flex;
    margin: 0.75rem 1rem 1rem 1rem;
    gap: 0.25rem;

    label {
      font-size: 0.625rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      text-transform: uppercase;
      color: var(--yellow-dark);
      background-color: var(--yellow-light);
    }
  }
  .coffee-name {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .coffee-description {
    text-align: center;
    font-size: 0.87rem;
    color: var(--base-label);
    margin-bottom: 2.07rem;
  }

  .price-div {
    display: flex;
    align-items: center;
    gap: 1rem;

    .coffee-price {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 1.5rem;
    }

    .increase-decrease-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      background: transparent;
      color: var(--purple);
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0.5rem;
      cursor: pointer;
      border: none;
    }

    .quantity-div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      background: var(--base-button);
      width: 4.5rem;
      height: 2.5rem;
    }

    .shopping-cart {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      border-radius: 0.5rem;
      background-color: var(--purple-dark);
      color: #fff;
      border: none;

      align-items: center;
      justify-content: center;
    }
  }
`;
