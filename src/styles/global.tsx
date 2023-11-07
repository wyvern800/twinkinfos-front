import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  color: gray;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* remover seleção de todos os componentes e liberar somente inputs */
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  outline: none;

  /* liberar select em tables */
  table {
    -webkit-user-select: text !important;
    -moz-user-select: -moz-text !important;
    -ms-user-select: text !important;
    user-select: text !important;
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: rgb(11, 14, 15);
  }

  *::-webkit-scrollbar-thumb {
    background: rgb(72, 74, 75);
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgb(54, 56, 58);
  }
}

  body, html, #root {
    background-color: rgba(26,27,31);
    background-color:  #08070d;

    margin: 0;
    padding: 0;

    width: 100%;

    margin-top: 2vh;
    margin-bottom: 2vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
