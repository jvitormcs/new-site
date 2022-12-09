import styled from "styled-components";

export const Container = styled.div`

background-color: #f9f9f9;
height: auto;
width: 35%;
border-radius: 15px;
text-align: center;
padding: 2rem;

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-top: 2rem;
    width: 100%;
    height: auto;
}

`

export const CardText = styled.div`
    margin-top: .85rem;
    color: #263238;
    font-weight: 500;
    font-size: .9rem;
    text-align: left;

`

export const CardName = styled.p`
margin-top: .65rem;
font-size: .9rem;
text-align: left;
    color: #263238;
    font-weight: 400;

`