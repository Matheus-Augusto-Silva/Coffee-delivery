import styled from "styled-components";

export const SucessContainer = styled.div`
  width: 100%;
  padding: 0 10rem;

  h1 {
    font-size: 2rem;
    color: var(--yellow-dark);
    margin-bottom: 0.25rem;
    margin-top: 5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--base-subtitle);
    font-weight: 400;
    margin-bottom: 3rem;
  }

  section {
    display: flex;

    .checkout-items {
      width: 100%;
      max-width: 31.875rem;
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;
      font-size: 1rem;

      .checkout-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        svg {
          margin-right: 1rem;
        }
        label {
          margin-bottom: 0;
          font-weight: 700;
        }
      }
    }

    .image-checkout {
      width: 100%;
      max-width: 30.875rem;
      height: 100%;
      max-height: 18.875rem;
      margin-bottom: 2rem;
    }
  }
`;
