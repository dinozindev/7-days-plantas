import { styled } from "styled-components"
import { amareloPadrao } from "../Variables"
import mailIcon from "../../img/mail.svg"
import { useState } from "react"

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

const Erro = styled.span`
    color: red;
    padding: 0.5rem 0.5rem;
`

export default function Newsletter() {
    
    // estados de erro e do valor do input de email
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null)

    // verificador de email válido a partir de uma regular expression. 
    function isEmailValid(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // quando uma atualização for feita no input, atualiza o estado do email. 
    const handleChange = e => {
        setEmail(e.target.value)
    }

    // quando o email for enviado, passa ele como argumento para isEmailValid, verificando se o email é válido a partir do teste com o regex. Caso seja, retorna true. Caso contrário retorna falso e apresenta uma mensagem de erro na tela. 
    const handleSubmit = e => {
        e.preventDefault()

        setError(null)

        if(isEmailValid(email)) {
            console.log("O email é válido")
        } else {
            console.log("Email invalido")
            setError("Email invalido.")
        }
    }


    return (
        <FormContainer onSubmit={handleSubmit}>
        <NewsletterStyle 
        type="text" 
        placeholder="Insira seu e-mail"
        onChange={handleChange}
        />
        <ButtonSend>Assinar newsletter</ButtonSend>
        <Erro>{error}</Erro>
        </FormContainer>
        
    )
}