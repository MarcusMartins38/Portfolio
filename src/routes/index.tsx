import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Routes;
