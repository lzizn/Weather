import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: rgba(0, 0, 0, 0.7);
    --black-01: rgba(10, 10, 10, 1);
    --black-02: rgba(20, 20, 20, 0.8);
    --black-03: rgba(46, 45, 45, 0.7); 
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
