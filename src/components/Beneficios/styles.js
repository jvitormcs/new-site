import styled from "styled-components";

export const Container = styled.div`

    background-color: ${props => props.bg};
    color: ${props => props.cor};
    width: 80%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    border-radius: 20px;
    padding-right: 2rem;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    height: auto;
    width: 90%;
    padding: 1rem;
}

`

export const BeneficioImage = styled.img``

export const TextGroup = styled.section``

export const BeneficioTitle = styled.h4`

    font-weight: 550;
    font-size: 1.1rem;
`

export const BeneficioDescription = styled.p`
    font-size: 1.1rem;

`
