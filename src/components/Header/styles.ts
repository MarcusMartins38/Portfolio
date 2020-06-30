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
`;

export const Content = styled.div`
  width: 100%;

  a {
    margin-left: 2em;

    color: #f6f5f5;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.5s;

    @media (max-width: 800px) {
      font-size: 16px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;
