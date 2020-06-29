import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  background-color: #151415;
  height: 100px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  a {
    margin: 0 24px;
    transition: opacity 0.6s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
