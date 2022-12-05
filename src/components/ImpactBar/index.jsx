import React from "react";
import { BarContainer, Container, Numero, Texto } from "./styles";

const ImpactBar = (props) => {

    return(
        <Container>

            <img src={props.icone} className="responsive" alt="" />

            <BarContainer>
                    <Numero>{props.valor}</Numero>   
                    <Texto>{props.texto}</Texto> 
            </BarContainer>        

        </Container>

    )
    
}

export default ImpactBar