import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Qualifications from "../pages/Qualifications";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Qualifications" component={Qualifications} />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Routes;
