import styled from "styled-components";

interface BackgroundProps {
  backgroundColor: string;
}

export const TitleContainer = styled.div`
  background-color: rgba(235, 193, 54, 0.03);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title-content {
    display: flex;
    justify-content: space-between;

    .title {
      font-family: "Baloo 2";
      margin-top: 1rem;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      color: var(--base-title);
    }

    .subtitle {
      font-size: 1.3rem;
      line-height: 130%;
      margin-bottom: 3.125rem;
    }

    .title-text {
      display: flex;
      flex-direction: column;
      height: 10%;
    }

    .title-image {
      width: max-content;

      .image-coffee {
        width: 100%;
        max-width: 465px;
      }
    }
  }
`;

export const Description = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0;

  .item-section {
    display: flex;
    align-items: center;
    width: 19rem;
  }
`;

export const Circle = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  margin-right: 0.75rem;
`;
