import React, { useState } from "react";

import { Container, Content } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import FrontEnd from "../../assets/Certificacoes/CertFrontEnd.png";
import HtmlCss from "../../assets/Certificacoes/CertHtmlCss.png";
import Javascript from "../../assets/Certificacoes/CertJavascript.png";

import IntroSql from "../../assets/Certificacoes/CertIntroSql.png";
import AvanSql from "../../assets/Certificacoes/CertAvanSql.png";
import SqlDml from "../../assets/Certificacoes/CertSqlDml.png";

import RocketSeat from "../../assets/Certificacoes/Rocketseat.png";

const Qualifications: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [info, setInfo] = useState<string>();

  function setData(data?: string): void {
    if (data) {
      setInfo(data);
    }
    toggleModal();
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Certification FullStack Rocketseat</h1>
          <p>ReactJS, NodeJS, React Native com o uso de Typescript</p>
          <button onClick={() => setData(RocketSeat)}>Ver Certificado</button>
        </Content>

        <Content>
          <h1>Certification Front-End Alura</h1>
          <p>Front-End</p>
          <button onClick={() => setData(FrontEnd)}>Ver Certificado</button>
          <p>HTML5/CSS3</p>
          <button onClick={() => setData(HtmlCss)}>Ver Certificado</button>
          <p>Javascript</p>
          <button onClick={() => setData(Javascript)}>Ver Certificado</button>
        </Content>

        <Content>
          <h1>Certification SQL Alura</h1>
          <p>Introdução ao SQL com MySQL</p>
          <button onClick={() => setData(IntroSql)}>Ver Certificado</button>
          <p>Avançando no MySQL</p>
          <button onClick={() => setData(AvanSql)}>Ver Certificado</button>
          <p>Comandos DML</p>
          <button onClick={() => setData(SqlDml)}>Ver Certificado</button>
        </Content>

        <Modal isOpen={modalOpen} setIsOpen={toggleModal} image={info} />
      </Container>
      <Footer />
    </>
  );
};

export default Qualifications;
