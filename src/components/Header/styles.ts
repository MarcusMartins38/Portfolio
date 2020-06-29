import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: #151415;
`;

export const Content = styled.div`
  a {
    margin-left: 2em;

    color: #f6f5f5;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
