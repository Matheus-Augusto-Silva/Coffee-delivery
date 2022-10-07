import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  line-height: 130%;
  margin: 2rem 0;
  padding: 0 10rem;

  .local-and-cart {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    margin-bottom: 8px;

    .logo {
      height: 30px;
    }

    .local {
      max-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--purple-light);
      padding: 0.5rem;
      border-radius: 0.5rem;
      gap: 0.4rem;
      span {
        color: var(--purple-dark);
        font-weight: 400;
      }
    }
    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--yellow-light);
      width: 38px;
      height: 38px;
      border-radius: 0.5rem;
      border: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
