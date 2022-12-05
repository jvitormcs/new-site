import styled from "styled-components";
import Paper from '../../assets/paper-texture.png'


export const Container = styled.div`

background-image: url(${Paper});
padding: 3rem;

display: flex;
justify-content: space-evenly;
align-items: center;

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    padding: 1rem;
}
`


export const ViewText = styled.section`

    width: 60%;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;
    margin: 10%;
}

`

export const Title = styled.h1`

    font-weight: 650;

`

export const ImageSend = styled.img``


export const TextBold = styled.p`

font-weight: 650;

`

export const TextEmail = styled.p``