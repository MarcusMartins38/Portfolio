import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1300px;
  min-width: 300px;
  margin-top: 4em;
  margin-bottom: 3em;
  padding: 1.2em 2em;

  border-radius: 24px;
  background-color: #151415;
  border-bottom: 8px solid white;

  &:nth-child(-n + 2) {
    border-bottom: 8px solid #12b2e2;

    h1 {
      border-bottom: 2px solid #12b2e2;
    }

    button {
      background-color: #12b2e2;
      padding: 8px;
      border-radius: 16px;
      transition: padding 0.5s, opacity 0.5s;
      border: 0;

      &:hover {
        padding: 6px;
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  h1 {
    margin-bottom: 32px;
    border-bottom: 2px solid white;
  }

  p {
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    margin-right: 24px;
  }
`;
