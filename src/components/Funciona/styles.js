import styled from "styled-components";


export const Container = styled.div`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;

`

export const BarContainer = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #263238;
    border-radius: 10px;
    margin-top: .5rem;
    padding: 1.5rem 1.5rem;
    width: 320px;
    height: 140px;
    margin-bottom: 1rem;

`;


export const Texto = styled.p`
    color: #263238;
    font-size: .96rem;
    margin-bottom: 0;
`;
