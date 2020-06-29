import React from "react";
import backgroundimage from "../../assets/backgroundimage.jpg";
import perfil from "../../assets/perfil.jpeg";
import unir from "../../assets/unir.jpeg";
import alura from "../../assets/alura.png";
import rocketseat from "../../assets/rocketseat.png";

import {
  HeadContainer,
  Content,
  DivAnimation,
  CardImage,
  Description,
} from "./styles";

import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <>
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
          <CardImage>
            <img src={unir} alt="unir" />
          </CardImage>
          <Description>
            Estudante de Ciencia da Computação na Fundação Universidade Federal
            de Rondônia (2018 - 2023).
          </Description>
        </DivAnimation>

        <DivAnimation>
          <Description>
            Fiz dos mais diversos cursos no Alura (2019 - 2020), para conhecer
            sobre diversas ferramentas, Ex: MySQL, Java e uma formação Front-end
            (HTML, CSS, Javascript, JQuery, ECMASCRIPT 6).
          </Description>

          <CardImage>
            <img src={alura} alt="alura" />
          </CardImage>
        </DivAnimation>

        <DivAnimation>
          <CardImage>
            <img src={rocketseat} alt="rocketseat" />
          </CardImage>
          <Description>
            Participei do Bootcamp da Rocketseat (2020), na turma GoStack 11.
            Assim, conhecendo e fortalecendo meu aprendizado com ReactJS, React
            Native e NodeJS
          </Description>
        </DivAnimation>
      </Content>
    </>
  );
};

export default Home;
