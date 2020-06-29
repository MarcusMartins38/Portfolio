import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentDiv = styled.div`
  width: 90%;
  margin-top: 4em;
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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #mobile {
    width: 200px;
  }
  img {
    width: 300px;
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
`;
