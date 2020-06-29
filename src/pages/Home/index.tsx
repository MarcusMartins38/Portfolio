import React, { useEffect, useMemo } from "react";
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
      <Header />
      <Container>
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
              Estudante de Ciencia da Computação na Fundação Universidade
              Federal de Rondônia (2018 - 2023).
            </Description>
          </DivAnimation>

          <DivAnimation>
            <Description data-aos="fade-right">
              Fiz dos mais diversos cursos no Alura (2019 - 2020), para conhecer
              sobre diversas ferramentas, Ex: MySQL, Java e uma formação
              Front-end (HTML, CSS, Javascript, JQuery, ECMASCRIPT 6).
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
              Participei do Bootcamp da Rocketseat (2020), na turma GoStack 11.
              Assim, conhecendo e fortalecendo meu aprendizado com ReactJS,
              React Native e NodeJS
            </Description>
          </DivAnimation>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
