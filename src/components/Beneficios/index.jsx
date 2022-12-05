import React from "react";
import { BeneficioDescription, BeneficioImage, BeneficioTitle, Container, TextGroup } from "./styles";

const Beneficios = ({icone, title, description, cor, bg}) => {

    return(

        <Container cor={cor} bg={bg}>
            <BeneficioImage src={icone} />
            <TextGroup>

            <BeneficioTitle>{title}</BeneficioTitle>
            <BeneficioDescription>{description}</BeneficioDescription>

            </TextGroup>
        </Container>

    )

}

export default Beneficios