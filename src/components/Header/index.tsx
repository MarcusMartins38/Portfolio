import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/qualificacoes">Qualificações</Link>
      </Content>
    </Container>
  );
};

export default Header;
