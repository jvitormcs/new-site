import React, { useEffect } from "react";
import { Btn, Container, Direita, Esquerda, ImageContainer, TextContainer, TextDescription, Title } from "./styles";
import { FaWhatsapp } from 'react-icons/fa'
import FolhaDireita from '../../assets/FolhaDireita.png'
import FolhaEsquerda from '../../assets/FolhaEsquerda.png'
const FaleConosco = () => {
    useEffect(()=>{

        localStorage.setItem('local', 'Fale Conosco')

    },[])
    return(

    <Container>
        <TextContainer>

            <Title>Fale Conosco</Title>
            <TextDescription>Clique no botão abaixo e envie sua mensagem no nosso WhatsApp. Assim que possível nosso time de comunicação entrará em contato para responder suas dúvidas.</TextDescription>       
            <Btn><FaWhatsapp size={25} color="#f9f9f9" /> Chamar no WhatsApp</Btn>
        </TextContainer>

        <ImageContainer>
            <Esquerda src={FolhaEsquerda} />
            <Direita src={FolhaDireita} />
        </ImageContainer>
    </Container>

    )

}

export default FaleConosco