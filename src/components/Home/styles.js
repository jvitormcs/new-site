import styled from "styled-components";
import ImagemBackground from '../../assets/background-home.png'
import WaveVerde from '../../assets/wave-verde.png'
import Paper from '../../assets/paper-texture.png'

export const Container = styled.div`
`;

export const TopContainer = styled.div`

display: flex;
align-items: top;
background-image: url(${ImagemBackground}) ;
padding: 15% 5% 400px 5%;
margin-bottom: -300px;

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;

}

`;



export const TitleContainer = styled.section`
        color: #263238;
        width: 50%;
        margin-right: 10%;
        
        @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        width: 80%;
        margin-left: 10%;

}

`;
export const VideoContainer = styled.div`
    width: 50%;
    color: #263238;
    iframe{
        height: 100%;
        width: 82.4%;
        margin: 0 8.8%;
    }

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        width: 100%;
        height: 250px;
        margin-top: 2rem;

}

`;
export const MainTitle = styled.h1`

    font-weight: 700;
    font-size: 2.75rem;

`;
export const SubTitle = styled.p`

color: #263238;

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
   margin-top: 4.5rem;

}

`;
export const Btn = styled.button`


    background-color: #00b09c;
    color: #f9f9f9;
    padding: 6px 15px;
    border: none;
    border-radius: 20px;

    :hover{
        background-color: #027467;
    }
`;

export const WaveContainer = styled.div`

    background-image: url(${WaveVerde});
    padding: 15%;
    background-repeat: no-repeat;
    margin-bottom: -100px;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-bottom: -10px;

}
`;

export const BgVerde = styled.div`

    background-color: #00b09c;
    display: flex;
    align-items: center;
    padding-bottom: 50px;
    
    @media only screen and (min-width: 319px) and (max-width: 450px) {
        padding: 0rem;
    .responsivel{

        width: 100%;
        
    }

    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-end;
}

`;

export const TitleSolution= styled.h3`
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #f9f9f9;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    font-size: 2.15rem;
}

`;
export const SolutionText = styled.p`
margin-bottom: 1.4rem;
color: #f9f9f9;

`;

export const InfoSolutionView = styled.section`

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    padding: 2rem;
}

`;


export const PaperTexture= styled.section`

background-image: url(${Paper});
padding: 3rem;
@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    padding: 1rem;

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

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;

}

`;

export const ServicosContainer = styled.section`

    background-color: #027467;
    padding: 2rem 0;
`
export const CardsContainer = styled.div`
 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2rem;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
        
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

`;

export const DepoimentoContainer = styled.section`

    background-color: #00b09c;
    padding: 3rem 0;

`;

export const ListDepoimentos = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


`;

export const ViewImages = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
        
        flex-direction: column;

}

`

export const ImageDepoimento = styled.img`
    filter: drop-shadow(1px 4px 8px #263238);
    @media only screen and (min-width: 319px) and (max-width: 450px) {
        
        height: auto;
        margin-top: 2rem;
        width: 80%;
        margin-left: 10%;

}
`

export const ViewFilInv = styled.div`
background-image: url(${Paper});

`

export const RowFilial = styled.div`
    display: flex;

    padding: 3rem 10% 2rem 10%;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    flex-direction: column-reverse;

}
    
`

export const FilialImage = styled.img`
    height: auto;
    width: 40%;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        width: 100%;
        margin-top: 2rem;
}
    
`
export const GroupFilial = styled.section`

    padding-left: 6rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        padding-left: 0;
        margin-top: 2rem;
        
}

`
export const GroupInvest = styled.section`

    padding-right: 6rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
        padding-right: 0;
        margin-top: 2rem;
}

`

export const FilialTitle = styled.h2`
    color: #263238;
    font-weight: 700;
    font-size: 2.5rem;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
       
}

`
export const FilialDescription = styled.p`

    color: #263238; 

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    

}

`

export const RowInvestimento = styled.div`

display: flex;
flex-direction: row-reverse;
padding: 3rem 10% 2rem 10%;
align-items: center;
justify-content: space-between;

@media only screen and (min-width: 319px) and (max-width: 450px) {

    flex-direction: column-reverse;

}

`
export const InvestImage = styled.img`
    height: auto;
    width: 40%;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 100%;
    margin-top: 2rem;
}
    
`
export const InvestTitle = styled.h2`
    color: #263238;
    font-weight: 700; 
    font-size: 2.5rem;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
       
}

`
export const InvestDescription = styled.p`

    color: #263238;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    
}
`

export const BtnRows = styled.button`

    background-color: #00b09c;
    border-radius: 25px;
    padding: 10px 15px;
    border: none;
    color: #f9f9f9;
    margin-bottom: 10px;

`