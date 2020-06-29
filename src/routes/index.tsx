import React from "react";

import Home from "../pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Routes;
