import styled from "styled-components"; 


export const BgContainer = styled.div`
    padding: 3rem 0 2rem 2rem;
    background-color: #263238;
    color: #f9f9f9;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    @media only screen and (max-width: 849px) {
        
        flex-direction: column;

    }
`
export const Title = styled.h3`
    font-size: .9rem;
    margin: 1rem 0 1rem 0;
    font-weight: 600;

`

export const Group = styled.div`
  
`
export const GroupAccess = styled.div`
   
`

export const GroupInfo = styled.div`

    display: flex;
    flex-direction: column;
`

export const Info = styled.p`
    font-size: .8rem;
    margin: 0;
    font-weight: 400;

`

export const IconGroup = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    align-items: center;

`
export const Link = styled.a`
    font-weight: 400;
    font-size: .8rem;
    color: #f9f9f9;
    text-decoration: none;
    :hover{
        color: #00b09c;
    }

`

export const Btn = styled.button`


    background-color: #00b09c;
    color: #f9f9f9;
    padding: 6px 15px;
    border: none;
    border-radius: 20px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    :hover{
        background-color: #027467;
    }
`;

export const GroupInput = styled.div`
    
    width: 350px;

    input{
        margin-bottom: 1rem;
        height: 1.6rem;
        border: 1px #f9f9f9 solid;
        background: none;
        border-radius: .6rem;
        padding-left: .6rem;
        color: #f9f9f9;
    }

    @media only screen and (min-width: 319px) and (max-width: 390px )  {

        width: 300px;
        
    }

`

export const Caixa = styled.textarea`
    color: #f9f9f9;
    height: 8rem;
    border: 1px #f9f9f9 solid;
    background: none;
    border-radius: .6rem;
    padding-top: .6rem;
    padding-left: .6rem;
    resize: none;

    
    
`