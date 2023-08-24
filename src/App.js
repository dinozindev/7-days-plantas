import { styled } from "styled-components";
import Header from "./components/Header";
import Menu from "./components/Menu";
import plantaMain from "./img/planta-main.svg"

const Home = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${plantaMain});
  background-repeat: no-repeat;
  background-position: 61% -20%;
`

function HomePage() {
  return (
    <>
      <Header />
      <Home>
        <Menu />
      </Home>
    </>
  );
}

export default HomePage;
