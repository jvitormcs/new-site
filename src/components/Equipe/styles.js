import styled from "styled-components";


export const Container = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
`

export const Perfil = styled.div`

    border-radius: 15px;
    padding: 20px;
    background-color: #00b09c;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;

}

`

export const Desc = styled.div`

width: 50%;
@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;

}

`

export const EquipeImage = styled.img`
    max-width: 90%;
    height: auto;

`

export const EquipeNome = styled.h3`

    color: #00b09c;
    font-weight: 650;
    font-size: 2.6rem;
    margin-bottom: .1rem;

`

export const EquipeCargo = styled.h4`

    font-size: 1.4rem;

`

export const EquipeBio = styled.p`

    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`

export const EquipeFrase = styled.p`
    font-weight: 450;
    margin-top: .65rem;
    font-size: 1.1rem;
    color: #f9f9f9; 
    text-align: center;

`
export const EquipeFraseMencao = styled.p`
    font-weight: 450;
    margin-top: .65rem;
    font-size: 1.1rem;
    color: #f9f9f9;

`

export const NomeCargo = styled.div`

    margin-bottom: 1.5rem;

`

export const TextGroup = styled.div``

export const EquipeSustenta = styled.p`

font-size: 1.2rem;

`

export const Bold = styled.strong`

font-size: 1.2rem;

`