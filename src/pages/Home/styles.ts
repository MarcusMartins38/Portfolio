import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRigth = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeadContainer = styled.div`
  background-color: #222222;
  width: 100%;

  #Background_Image {
    flex: 1;
    width: 100%;
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
    margin-top: 50px;
    margin-left: 400px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
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
    width: 450px;
    height: 266px;
  }

  &:nth-child(odd) {
    animation: ${appearFromLeft} 3s;
  }

  &:nth-child(even) {
    animation: ${appearFromRigth} 3s;
  }
`;

export const Description = styled.div`
  margin: 0 36px;
  font-size: 18px;

  &:nth-of-type(odd) {
    animation: ${appearFromLeft} 3s;
  }
  &:nth-of-type(even) {
    animation: ${appearFromRigth} 3s;
  }
`;
