import { styled } from "styled-components"
import logoCasaVerde from "../../img/logo-casa-verde.svg"

const HeaderStyled = styled.header`
    display:flex;
    justify-content: space-evenly;
    padding-top: 1.25rem;
`

const HeaderLista = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
`

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logoCasaVerde} alt="logo da casa verde"/> 
            <HeaderLista>
              <li>Como fazer  /</li>
              <li>Ofertas  /</li>  
              <li>Depoimentos  /</li>  
              <li>Vídeos  /</li>  
              <li>Meu carrinho</li>    
            </HeaderLista>  
        </HeaderStyled>
    )
}