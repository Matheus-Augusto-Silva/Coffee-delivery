import styled from "styled-components";

export const CheckoutContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 10rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: Baloo 2;
    font-size: 700;
  }

  .checkout-content-left {
    width: 100%;
    display: flex;
    flex-direction: column;

    .address-info,
    .payment-info {
      background-color: var(--base-card);
      border-radius: 0.2rem;
      max-width: 40rem;
      padding: 2.5rem;
      margin-top: 0.75rem;
    }

    .address-title,
    .payment-title {
      display: flex;
      gap: 0.5rem;

      .address-and-payment-info-text {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        span {
          font-size: 1rem;
          font-weight: 400;
        }
        p {
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .checkout-content-right {
    width: 100%;
    max-width: 28rem;
    min-width: 18rem;
  }
`;
export const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  input {
    padding: 0.5rem;
    border: 1px solid #e6e5e5;
    border-radius: 0.2rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--base-text);
    background-color: var(--base-input);
  }

  .street {
    width: 100%;
  }

  .form-group {
    display: flex;
    width: 100%;
    gap: 0.5rem;

    .zip,
    .number,
    .neighborhood {
      max-width: 12.5rem;
      margin-right: 0.5rem;
    }

    .complement {
      width: 100%;
      max-width: 22.75rem;
    }

    .state {
      max-width: 4rem;
    }

    .city {
      width: 100%;
      max-width: 18.5rem;
      min-width: 8.5rem;
    }
  }

  .search {
    background-color: transparent;
    border: none;
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  span {
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }

  .payment-methods {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 40rem;
    flex-wrap: wrap;

    .payment-method {
      background-color: var(--base-button);
      display: flex;
      width: 100%;
      max-width: 11.125rem;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
      border: none;

      span {
        font-size: 0.875rem;
      }
    }
    .payment-method-checked {
      background-color: var(--purple-light);
      display: flex;
      width: 100%;
      max-width: 11.125rem;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
      border: none;

      span {
        font-size: 0.875rem;
      }
    }
  }
`;
export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Product = styled.div`
  width: 100%;
  min-height: 35.5rem;
  display: flex;
  flex-direction: column;

  margin-top: 0.75rem;
  background-color: var(--base-card);
  border-radius: 0.2rem;
  border-top-right-radius: 3rem;
  padding: 2.5rem 2.5rem 1.5rem 0.25rem;

  .delivery-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e5e5;
    padding-bottom: 1.3rem;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }

    .product-image-and-price {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      img {
        width: 4rem;
      }

      .product-buttons {
        display: flex;
        gap: 0.5rem;

        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--base-button);
          border-radius: 0.4rem;
        }

        .increase-decrease-button {
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;

          color: var(--purple);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0.5rem;
          cursor: pointer;
          border: none;
          background-color: transparent;
        }
      }

      .name-and-button-container {
        display: flex;
        flex-direction: column;

        p {
          margin-bottom: 0.6rem;
        }
      }

      .remove-button {
        display: flex;
        align-items: center;
        border: none;
        background-color: var(--base-button);
        border-radius: 0.5rem;
        padding: 0.3rem;
      }
    }
    .price {
      font-size: 1rem;
      margin-top: 0.4rem;
      font-weight: bold;
    }
  }
  .item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    font-family: Roboto 2;

    p {
      font-size: 0.875rem;
    }

    label {
      font-size: 1rem;
    }

    &:last-child {
      margin-top: 1.5rem;

      p,
      label {
        font-size: 1.5rem;
      }
    }
  }

  .delivery-navlink {
    width: 100%;
    text-decoration: none;
    margin-top: 1.5rem;
    margin-left: 1rem;

    button {
      width: 100%;
      height: 3rem;
      display: flex;
      border: none;
      border-radius: 0.5rem;
      align-items: center;
      justify-content: center;
      background-color: var(--yellow);
      margin-top: 1rem;
      font-family: Roboto 2;
      color: #fff;

      &:hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
