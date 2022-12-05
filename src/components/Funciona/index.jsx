import React from "react";
import { BarContainer, Container, Texto } from "./styles";

const Funciona = (props) => {

    return(
        <Container>

            <img src={props.icone} alt="" />

            <BarContainer>   
                    <Texto>{props.texto}</Texto> 
            </BarContainer>        

        </Container>

    )
    
}

export default Funciona