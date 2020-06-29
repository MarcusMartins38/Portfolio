import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/marcus-martins-developer/">
        <AiFillLinkedin size={56} />
      </a>
      <h1>- Marcus Vinícius Machado Martins -</h1>
      <a href="https://github.com/MarcusMartins38">
        <AiFillGithub size={56} />
      </a>
    </Container>
  );
};

export default Footer;
