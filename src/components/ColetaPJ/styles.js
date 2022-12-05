import styled from "styled-components";
import ImagemBackground from '../../assets/BannerEmpresa.png'
import ImagemBackgroundM from '../../assets/BannerEmpresaM.png'
import WaveBranco from '../../assets/wave-white.png'
import Paper from '../../assets/paper-texture.png'

export const Container = styled.div`
`;

export const TopContainer = styled.div`

display: flex;
align-items: top;
background-image: url(${ImagemBackground}) ;
padding: 15% 5% 400px 5%;
margin-bottom: -400px;
background-position: top center;
background-repeat: no-repeat;
@media only screen and (min-width: 319px) and (max-width: 450px) {
    background-image: url(${ImagemBackgroundM}) ;
    padding: 8% 5% 380px 5%;
}
`;



export const TitleContainer = styled.section`
        color: #263238;
        width: 50%;
        margin-right: 10%;
        @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        width: 100%;
}

`;

export const MainTitle = styled.h1`

    font-weight: 700;
    font-size: 2.75rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-size: 2.15rem;
}

`;
export const SubTitle = styled.p`

color: #263238;
@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-weight: 500;
}

`;

export const TextAlert = styled.p`

    color: #FC0841;
    font-size: 1rem;
    margin-top: 1rem;

`

export const BtnTop = styled.button`


    background-color: #00b09c;
    color: #f9f9f9;
    padding: 6px 15px;
    border: none;
    border-radius: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    :hover{
        background-color: #027467;
    }
`;

export const Btn = styled.button`


    background-color: #00b09c;
    color: #f9f9f9;
    padding: 6px 15px;
    border: none;
    border-radius: 20px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    padding: 12px 60px;
}
    :hover{
        background-color: #027467;
    }
`;

export const WaveContainer = styled.div`

    background-image: url(${WaveBranco});
    padding: 15%;
    background-repeat: no-repeat;
    background-position: top center;
    margin-bottom: -180px;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    background-size: cover;
    padding: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
}
`;

export const BgVerde = styled.div`

    background-color: #00b09c;
    display: flex;
    align-items: center;
    padding: 100px;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    padding: 1rem;
}
`;

export const BgBeneficios = styled.div`

    background-color: #00b09c;
    display: flex;
    align-items: center;
    padding-bottom: 50px;
   
`;

export const ViewFunciona = styled.div`

    text-align: center;
    margin-bottom: 2rem;
    

`

export const ViewCards = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`

export const TitleFunciona= styled.h3`
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #263238;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-size: 2.15rem;
}

`;

export const SolutionText = styled.p`
margin-bottom: 1.4rem;
color: #f9f9f9;

`;

export const InfoSolutionView = styled.section`

    width: 70%;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 100%;
}

`;


export const Title = styled.h3`
    font-weight: 700;
    font-size: 2.75rem;
    color: ${props => props.cor == 'preto' ? '#263238' : '#f9f9f9'};
    text-align: center;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-size: 2.15rem;
}

`;
export const TitleRealixo = styled.h3`
    font-weight: 700;
    font-size: 2.75rem;
    color: ${props => props.cor == 'preto' ? '#263238' : '#f9f9f9'};
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-size: 2.15rem;
}

`;
export const Description = styled.p`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.cor == 'preto' ? '#263238' : '#f9f9f9'};

`;

export const BarIcon = styled.div`

    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;

export const ServicosContainer = styled.section`

    background-color: #00b09c;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CardsContainer = styled.div`
 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`;



export const FormContainer = styled.div`

background-image: url(${Paper});
padding: 3rem;

`

export const FormSubTitle = styled.h4`

font-weight: 700;
    font-size: 1.45rem;
    color: ${props => props.cor == 'preto' ? '#263238' : '#f9f9f9'};
    text-align: center;

`
export const ViewForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormRes = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const ResInput = styled.input`

    width: 40%;
    height: 2.5rem;
    margin-top: 1.5%;
    padding-left: 1rem;
    background: none;
    color: #263238;
    border-radius: 15px;
    border: 1px #263238 solid;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 100%;
}

`
export const FormButton = styled.button`
background-color: #00b09c;
    color: #f9f9f9;
    margin-top: 1rem;
    padding: 6px 30px;
    border: none;
    border-radius: 20px;
    margin-bottom: 1rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    padding: 12px 60px;
}
    
    :hover{
        background-color: #027467;
    }

`

export const ImageCotratar = styled.img`

    width: 40%;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;
}

`