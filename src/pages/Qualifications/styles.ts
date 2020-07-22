import styled from "styled-components";
import { shade } from "polished";

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

  button {
    padding: 12px 32px;
    border-radius: 16px;
    transition: padding 0.5s, opacity 0.5s;
    border: 0;

    font-size: 16px;
    font-weight: 500;

    & + button {
      margin-left: 16px;
      margin-top: 16px;
    }

    &:hover {
      padding: 14px 34px;
      opacity: 0.8;
      cursor: pointer;
    }
  }

  &:nth-child(-n + 3) {
    border-bottom: 8px solid #12b2e2;

    h1 {
      border-bottom: 2px solid #12b2e2;
    }

    button {
      background-color: #12b2e2;
      border-bottom: 6px solid ${shade(0.4, "#12b2e2")};
    }
  }

  &:nth-child(1) {
    border-bottom: 8px solid #4328f6;

    h1 {
      border-bottom: 2px solid #4328f6;
    }

    button {
      background-color: #4328f6;
      border-bottom: 6px solid ${shade(0.4, "#4328f6")};
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
