import styled from "styled-components";

export const Container = styled.div`

background-color: #f9f9f9;
height: 390px;
width: 300px;
border-radius: 15px;
text-align: center;
padding-bottom: 45px;

@media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-top: 2rem;

}

`

export const CardTitle = styled.div`
    margin-top: .85rem;
    color: #263238;
    font-weight: 600;
    font-size: 1.6rem;

`

export const CardDescription = styled.p`
margin-top: .65rem;
padding: 0 15px;

`

export const CardButton = styled.button`

    background-color: #00b09c;
    border-radius: 25px;
    padding: 10px 15px;
    border: none;
    color: #f9f9f9;
    margin-bottom: 10px;

`