import styled from "styled-components";
import Paper from '../../assets/paper-texture.png'
export const Container = styled.div`

background-image: url(${Paper});
padding-top: 6rem;
@media only screen and (max-width: 849px) {
    padding-top: 3rem;
    padding-bottom: 3rem;

    }
`

export const TextContainer = styled.div`
    text-align: center;
    width: 50%;
    margin-left: 25%;
    @media only screen and (max-width: 849px) {
        
        width: 80%;
        margin-left: 10%;

    }

`

export const ImageContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   margin-top: -6rem;
   margin-bottom: -6.79rem;

   @media only screen and (max-width: 849px) {
        
       display: none;

    }

`

export const Title = styled.h2`

    font-weight: 650;

`

export const TextDescription = styled.p``

export const Btn = styled.button`

background-color: #00b09c;
    color: #f9f9f9;
    padding: 6px 15px;
    border: none;
    border-radius: 20px;
    margin-top: .6rem;
    margin-bottom: 1rem;
    :hover{
        background-color: #027467;
    }

`

export const Esquerda = styled.img`

    height: auto;
    width: 28% ;

`

export const Direita = styled.img`

    height: auto;
    width: 28% ;

`