import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black-01: #101010;
    --black-02: #2E2D2D; 
    --black-03: #303030;
    --gray-01: #606060;
    --gray-02: #C4C4C4;
    --white-01: #F0F0F0;
    --red: #F56A6A;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, select {
    font-weight: bold;
    font-family: "Montserrat", -apple-system, sans-serif;
  }
  a, a:hover  {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  @media screen and (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }
  @media screen and (max-width: 720px) {
    html {
      font-size: 75%;
    }
  }
`;
