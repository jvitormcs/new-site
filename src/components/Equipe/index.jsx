import React from "react";
import { Bold, Container, Desc, EquipeBio, EquipeCargo, EquipeFrase, EquipeFraseMencao, EquipeImage, EquipeNome, EquipeSustenta, NomeCargo, Perfil, TextGroup } from "./styles";

const EquipeCard = (props) => {
    return (
        <Container>

            <Perfil>

                <EquipeImage src={props.image} />
                <TextGroup>
                <EquipeFrase>{props.frase}</EquipeFrase>
                {
                    props.mencao != '' ? <EquipeFraseMencao> - {props.mencao}</EquipeFraseMencao> : ''
                }
                </TextGroup>
            </Perfil>

            <Desc>

                <NomeCargo>
                    <EquipeNome>{props.nome}</EquipeNome>
                    <EquipeCargo>{props.cargo}</EquipeCargo>
                </NomeCargo>

                <EquipeBio>{props.bio}</EquipeBio>
                <EquipeSustenta><Bold>Sustentabilidade diária que mais gosta:</Bold> {props.sustenta}</EquipeSustenta>

            </Desc>

        </Container>
    )

}

export default EquipeCard