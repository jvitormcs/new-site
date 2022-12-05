import styled from "styled-components";


export const Container = styled.div`
@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-top: 2rem;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .responsive{
        margin-right: 12px;
    }
}

}

`

export const BarContainer = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #00b09c;
    border: none;
    border-radius: 10px;
    margin-top: .5rem;
    padding: .2rem 1rem;
    width: 240px;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        width: 260px;

}
    
`;

export const Numero = styled.h4`

    color: #f9f9f9;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0;
    margin-right: .6rem;

`;

export const Texto = styled.p`
    color: #f9f9f9;
    font-size: 1rem;
    margin-bottom: 0;

`;
