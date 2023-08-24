import { createGlobalStyle } from "styled-components";
import manchaAmarela from "../../img/mancha-amarela.svg"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #f2f2f2;
  background-image: url(${manchaAmarela});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 50%;
}

li {
  list-style: none;
}
`