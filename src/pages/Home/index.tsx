import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import backgroundimage from "../../assets/backgroundimage.jpg";
import perfil from "../../assets/perfil.jpeg";
import unir from "../../assets/unir.jpeg";
import alura from "../../assets/alura.png";
import rocketseat from "../../assets/rocketseat.png";

import {
  Container,
  HeadContainer,
  Content,
  DivAnimation,
  CardImage,
  Description,
} from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Container>
        <Header />

        <HeadContainer>
          <img id="Background_Image" src={backgroundimage} alt="Background" />
          <img id="Profile_Image" src={perfil} alt="Profile" />
          <div>
            <h1>Marcus Vinícius Machado Martins</h1>
          </div>
        </HeadContainer>
        <Content>
          <DivAnimation>
            <CardImage data-aos="fade-right">
              <img src={unir} alt="unir" />
            </CardImage>
            <Description data-aos="fade-left">
              Student of Computer Science in Foundation University Federal of
              Rondônia (2018 - 2023). This is the beginning of a serious life of
              developer, I started to programming before this, but this is when
              I take it serious.
            </Description>
          </DivAnimation>

          <DivAnimation>
            <Description data-aos="fade-right">
              I studied many things in Alura (2019 - 2020), to know about
              various tools, Example: MySQL, Java and a Front-end training
              (HTML, CSS, Javascript, JQuery, ECMASCRIPT 6).
            </Description>

            <CardImage data-aos="fade-left">
              <img src={alura} alt="alura" />
            </CardImage>
          </DivAnimation>

          <DivAnimation>
            <CardImage data-aos="fade-right">
              <img src={rocketseat} alt="rocketseat" />
            </CardImage>
            <Description data-aos="fade-left">
              I participated in Rocketseat's Bootcamp (2020), in the GoStack 11
              class. Thus, I improved my knowledge in ReactJS, React Native and
              NodeJS.
            </Description>
          </DivAnimation>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
