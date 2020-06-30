import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4em;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

export const ContentDiv = styled.div`
  width: 90%;
  max-width: 1300px;
  min-width: 300px;
  margin-top: 4em;
  margin-bottom: 3em;
  padding: 1.2em 2em;

  border-radius: 24px;
  background-color: #151415;
  border-bottom: 16px solid white;

  :first-child {
    border-bottom: 16px solid orange;
    #header_div {
      border-bottom: 2px solid orange;
    }
  }

  &:nth-child(2) {
    border-bottom: 16px solid #58e149;
    #header_div {
      border-bottom: 2px solid #58e149;
    }
  }

  &:nth-child(3) {
    border-bottom: 16px solid #543bf7;
    #header_div {
      border-bottom: 2px solid #543bf7;
    }
  }

  #header_div {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      transition: opacity 0.5s;
    }
    a:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    margin-right: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #mobile {
    max-width: 200px;
  }
  img {
    max-width: 300px;
    height: 400px;
    border-radius: 24px;

    & + img {
      margin-left: 10px;
    }
  }

  p {
    max-width: 400px;
    font-size: 20px;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
