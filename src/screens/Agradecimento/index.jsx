import React from "react";
import { Container, ImageSend, TextBold, TextEmail, Title, ViewText } from "./styles";
import Send from "../../assets/celular_email.png"
const Agradecimento = () => {

    return(

        <Container>
            <ViewText>
            
            <Title>Agradecemos seu interesse em nosso serviço!</Title>
            <TextBold>Te enviamos um e-mail!</TextBold>
            <TextEmail>Se nosso e-mail não chegou à sua caixa de entrada, veja no spam. Às vezes acontece que nos colocam na lixeira comum.</TextEmail>
            <TextEmail>A altura para nós que trabalhamos para criar um mundo sem lixo, né?!</TextEmail>
            </ViewText>
            <ImageSend src={Send}/>
        </Container>

    )


}

export default Agradecimento