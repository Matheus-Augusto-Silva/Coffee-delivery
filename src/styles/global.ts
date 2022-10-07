import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #1a1a1a;

  --white: #fff;
  --background: #FAFAFA;
  --base-title:#272221 ;
  --base-subtitle: #403937;
  --base-text: #574F4D;
  --base-label: #8D8686;
  --base-hover: #D7D5D5;
  --base-button: #E6E5E5;
  --base-input: #EDEDED;
  --base-card: #F3F2F2;

  --purple: #8047F8;
  --purple-dark: #4B2995;
  --purple-light: #EBE5F9;

  --yellow: #DBAC2C;
  --yellow-dark: #C47F17;
  --yellow-light: #F1E9C9;
}

:focus {
  outline: transparent;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
  color: var(--base-text);
  max-width: 90rem;
  min-width: 50rem;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased; //aplica uma padronização de fontes mais detalhada
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

body,
input,
textarea,
button {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button{
  cursor: pointer;
}

`;