import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    transition: color, background 1s ease 0s, transform 1s ease 0s;
    color: ${props => props.theme.colors.text};
  }
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;

    @media(max-width: 1535px) {
      font-size: 58%;
    }

    @media(max-width: 1080px) {
      font-size: 54%;
    }

  }
  input, button, textarea, p {
    font: 1.8rem 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  form input {
    width: 100%;
    height: 60px;
    color: black;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
  form textarea {
    width: 100%;
    min-height: 140px;
    resize: none;
    color: black;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }
`
