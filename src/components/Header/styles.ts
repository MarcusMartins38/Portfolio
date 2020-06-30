import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 4em;
  display: flex;
  align-items: center;
  width: 100%;
  border-spacing: 0;
  position: fixed;
  z-index: 1;

  background-color: #151415;
  border-bottom: 2px solid white;
`;

export const Content = styled.div`
  width: 100%;

  a {
    margin-left: 2em;

    color: #f6f5f5;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none;
    transition: border-bottom 1s, border-top 1s;

    &:hover {
      border-bottom: 3px solid white;
      border-top: 4px solid white;
    }

    @media (max-width: 600px) {
      font-size: 16px;
      min-width: 300px;
    }
  }
`;
