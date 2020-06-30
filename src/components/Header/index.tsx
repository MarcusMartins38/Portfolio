import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Content } from "./styles";

const Header: React.FC = () => {
  const menuItems = ["Home", "Projects", "Qualifications"];

  return (
    <Container>
      <Content>
        {menuItems.map((menuItem) => (
          <NavLink
            activeStyle={{
              borderBottom: "3px solid white",
              borderTop: "4px solid white",
            }}
            key={menuItem}
            to={menuItem}
          >
            {menuItem}
          </NavLink>
        ))}
      </Content>
    </Container>
  );
};

export default Header;
