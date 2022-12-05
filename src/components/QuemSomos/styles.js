import styled from "styled-components";
import WaveVerde from '../../assets/wave-verde.png'
import Missao from '../../assets/missao.png'

export const Container = styled.div`

    margin-bottom: 4rem;

`

export const TitleInitial = styled.h1`

    font-size: 2.6rem;
    color: #00b09c;
    font-weight: 550;
    text-align: center;

`
export const TitleMiddle = styled.h2`
    margin-top: 1rem;
    font-size: 2.6rem;
    color: #00b09c;
    font-weight: 550;
    text-align: center;

`

export const QuemSomosRow = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;

    .responsible{
        height: auto;
        width: 80%;
    }

}

`
export const QuemSomosReverseRow = styled.div`

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    flex-direction: column;
    margin-top: 4rem,;
    .responsible{
        height: auto;
        width: 80%;
    }
}
`

export const GroupText = styled.div`

    width: 50%;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;
    margin-left: 10%;
    margin-top: 2rem,;

}

`

export const TextHead = styled.p`

    font-size: 1.3rem;
    font-weight: 500;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-top: 2rem;

}

`

export const WaveContainer = styled.div`

    background-image: url(${WaveVerde});
    padding: 15%;
    background-repeat: no-repeat;
    margin-bottom: -100px;
`;

export const BgVerde = styled.div`

    background-color: #00b09c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
   justify-content: center;
`;

export const GroupMission = styled.div`
    text-align: center;
    color: #f9f9f9;
    margin-bottom: .85rem;
    
`

export const MissionTitle = styled.h3`

    font-size: 2.5rem;
    font-weight: 550;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-top: 1rem;

}

`

export const MissionDescription = styled.p`

    font-size: 1.3rem;
    width: 900px;
    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    width: 80%;
    margin-left: 10%;

}
`
export const MissionDescriptionBold = styled.p`
    font-weight: 500;
    font-size: 1.3rem;

`

export const Mission = styled.div`
    background-image: url(${Missao});
    width: 100%;
    min-height: 117vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-top: -460px;

`