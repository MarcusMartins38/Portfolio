import React from "react";
import { Container, ContentDiv, Content } from "./styles";
import { FiGithub } from "react-icons/fi";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContentDiv>
          <div id="header_div">
            <h1>Go Barber</h1>
            <a href="https://github.com/MarcusMartins38/GoBarberApplication">
              <FiGithub size={48} />
            </a>
          </div>
          <Content>
            <p>
              GoBarber is a application to schedule an appointment with a hair
              stylist, and the hair stylist can see the appointments with his
              client. You can register an account, receive and email if you
              forgot the password, see your perfil, change your photo, and some
              another's informations of your profile, also you can see the
              appointments that your clients schedule with you, and you can
              schedule any appointment with another hair stylist.
            </p>
            <div>
              <img
                src="https://raw.githubusercontent.com/MarcusMartins38/GoBarberApplication/master/.github/perfil.gif"
                alt="GoBarber Gif"
              />
              <img
                id="mobile"
                src="https://github.com/MarcusMartins38/GoBarberApplication/raw/master/.github/MobileGif.gif"
                alt="GoBarber Mobile Gif"
              />
            </div>
          </Content>
        </ContentDiv>

        <ContentDiv>
          <div id="header_div">
            <h1>Ecoleta</h1>
            <a href="https://github.com/MarcusMartins38/SistemaDeColeta-NLW01">
              <FiGithub size={48} />
            </a>
          </div>

          <Content>
            <div>
              <img
                src="https://github.com/MarcusMartins38/SistemaDeColeta-NLW01/raw/master/.github/DesktopVide.gif"
                alt="NWL Gif"
              />
              <img
                id="mobile"
                src="https://github.com/MarcusMartins38/SistemaDeColeta-NLW01/raw/master/.github/MobileVideo.gif"
                alt="NWL Mobile Gif"
              />
            </div>
            <p>
              The porpose of Ecoleta is help people to find collection points
              easier way. You can register a collection point, and in the
              mobile, you can see the location of the points in a map, and some
              information about then.
            </p>
          </Content>
        </ContentDiv>

        <ContentDiv>
          <div id="header_div">
            <h1>Volunteer</h1>
            <a href="https://github.com/MarcusMartins38/AloneStudyingOfReact">
              <FiGithub size={48} />
            </a>
          </div>
          <Content>
            <p>
              The App Volunteer was created to help people to help themselves.
              In the App, we can Create an Account, Log in, Quit Account,
              Register some Notes (That has: Case: The title, Description:
              Explanation of problem, Help: What would help you).
            </p>

            <div>
              <img
                src="https://github.com/MarcusMartins38/AloneStudyingOfReact/raw/master/src/images/home.png"
                alt="Volunteer"
              />
              <img
                src="https://github.com/MarcusMartins38/AloneStudyingOfReact/raw/master/src/images/signIn.png"
                alt="Volunteer"
              />
            </div>
          </Content>
        </ContentDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
