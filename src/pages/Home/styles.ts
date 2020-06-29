import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
`;

export const HeadContainer = styled.div`
  background-color: #222222;
  width: 100%;

  #Background_Image {
    flex: 1;
    min-width: 100%;
    height: 400px;
    display: block;
  }

  #Profile_Image {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: absolute;
    margin-top: -100px;
    margin-left: 15%;
    border: 3px solid #1d181e;
  }

  div {
    max-width: 400px;
    margin-left: 24em;
    margin-top: 100px;

    p {
      position: relative;
    }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media (min-width: 900px) {
    overflow: hidden;
  }
`;

export const DivAnimation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const CardImage = styled.div`
  img {
    border-radius: 30px;
    max-width: 250px;
    height: 266px;
  }
  @media (min-width: 900px) {
    img {
      border-radius: 30px;
      max-width: 450px;
      height: 266px;
    }
  }
`;

export const Description = styled.div`
  margin: 0 36px;
  font-size: 18px;

  @media (max-width: 700px) {
    width: 250px;
  }
`;
