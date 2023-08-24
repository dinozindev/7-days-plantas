import { styled } from "styled-components";
import { pretoPadrao } from "../Variables";
import Newsletter from "../Newsletter";


const ContainerTotal = styled.section`
    width: 60%;
    padding: 10rem 0 0 23%;
    display:flex;
    flex-direction: column; 
    gap: 1.5rem;
`
const ContainerMenu = styled.div`
   display:flex;
    flex-direction: column;
    gap: 1.5rem; 
   width: 54%;
`

const Subtitulo = styled.h3`
    color: ${pretoPadrao};
    opacity: 0.5;
`

const Titulo = styled.h2`
    font-family: "Elsie Swash Caps", sans-serif;
    color: ${pretoPadrao};
    font-size: 82px;
    font-weight: 900;
`

const Paragrafo = styled.p`
    color: ${pretoPadrao};
    opacity: 0.5;
    line-height: 26px;
`


export default function Menu() {
    return (
        <ContainerTotal>
            <ContainerMenu>
                <Subtitulo>Sua casa com as</Subtitulo>
                <Titulo>melhores plantas</Titulo>
                <Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>
            </ContainerMenu>
            <Newsletter />
        </ContainerTotal>
    )
}