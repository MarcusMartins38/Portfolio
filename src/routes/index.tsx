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
      <Route path="/projects" exact component={Projects} />
      <Route path="/qualifications" exact component={Qualifications} />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Routes;
