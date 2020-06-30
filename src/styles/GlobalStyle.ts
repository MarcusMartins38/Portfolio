import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: #222222;
  }
  *, button, input {
    color: #F6F5F5;
    border: 0;
    outline: 0;
    font-family: 'Roboto Slab', sans-serif;
  }
  
`;
