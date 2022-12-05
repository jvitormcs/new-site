import React from "react";
import { Container, Description, Title, Valor } from "./styles";

const Plano = ({title, description, valor}) => {

    return(
        <Container>

            <Title>{title}</Title>
            <Description>{description}</Description>
            <Valor>{valor}</Valor>

        </Container>
    )

}


export default Plano