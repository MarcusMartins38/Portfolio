import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 720px;
  bottom: 0;
  background-color: #151415;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: stretch;

  margin-top: 72px;

  a {
    margin: 0 24px;
    transition: opacity 0.6s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
