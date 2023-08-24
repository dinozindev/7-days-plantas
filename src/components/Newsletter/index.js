import { styled } from "styled-components"
import { amareloPadrao } from "../Variables"
import mailIcon from "../../img/mail.svg"

const FormContainer = styled.form` 
    width: 70%;     
`

const NewsletterStyle = styled.input`
    border: none;
    width: 70%;
    height: 3.75rem;
    background-image: url(${mailIcon});
    background-repeat: no-repeat;
    background-position: right;
    background-origin: content-box;
    padding: 0 1rem;
    text-align: left;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06); 
`

const ButtonSend = styled.button`
    border:none;
    width: 30%;
    background-color: ${amareloPadrao};
    height: 3.75rem;
    color: #fff;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    
`

export default function Newsletter() {
    return (
        <FormContainer>
        <NewsletterStyle type="email" placeholder="Insira seu e-mail"/>
        <ButtonSend>Assinar newsletter</ButtonSend>
        </FormContainer>
    )
}