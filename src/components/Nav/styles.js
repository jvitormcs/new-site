import { Link } from "react-router-dom";
import styled from "styled-components";

/* export const NavContainer = styled.nav`

   height: 5rem!important;

   display: flex;
   
   align-items: center;
   justify-content: space-between;
   padding-left: 50px;
   padding-right: 50px;

   ul{
    display: flex;
    align-items: center!important;
    justify-content: space-around;
    margin: 0;
   }

   li{
    list-style: none;
    font-weight: 550;
    padding-right: 25px;
    font-size: 1.2rem;
   }

   a{
    color: #263238;
    text-decoration: none;
   }

   .logo{

      height: auto;
      width: 150px;

   }

   button{

      background: none!important;
      border: none!important;
      color: #333!important;
      font-weight: 550;
      font-size: 1.2rem;

   }

   button:hover{

      background: none!important;
      border: none!important;
      color: #333;
      font-weight: 550;
      font-size: 1.2rem;

   }
   


    

   .dropdown-item{
      color: #00b09c;
      text-align: right;
   }

` */

export const NavContainer = styled.div`

   height: 5rem!important;

   padding-top: .7rem;
   padding-left: 50px;
   padding-right: 50px;
   font-size: 1.2rem;
   color: #263238;
   font-weight: 550;


   li{
    list-style: none;
    font-weight: 550;
    padding-right: 25px;
    font-size: 1.6rem;
   }

   a{
    color: #263238!important;
    padding-right: 30px;
    text-decoration: none!important;
   }

   .dropdown{
      padding-right: 30px;
   }

   .dropdown-menu.show{

      text-align: left;
      padding: 1rem;
      width: 20rem;

   }
   .dropdown-menu.show a{

      color: #00b09c!important;

   }
   .dropdown-menu.show a:hover{

      color: #027467!important;

   }
   
   .logo{

      height: auto;
      width: 150px;

   }

   button{

      background: none!important;
      border: none!important;
      color: #333!important;
      font-weight: 550;
      font-size: 1.2rem;

   }

   button:hover{

      background: none!important;
      border: none!important;
      color: #333;
      font-weight: 550;
      font-size: 1.2rem;

   }
   

   .noFim{
      justify-content: flex-end!important;
   }
    
   ul{
    display: flex;
    align-items: center!important;
    justify-content: space-around;
    margin: 0;
   }

   .dropdown-item{
      color: #00b09c;
      text-align: right;
   }


`

export const ContentMenu = styled.div`

   

`

export const CustomLink = styled(Link)`

   
    color: #263238!important;
    padding-right: 30px;
    text-decoration: none!important;   
    font-weight: 600;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-bottom: 10px;

}

`
export const CustomLinkA = styled.a`

   
    color: #263238!important;
    padding-right: 30px;
    text-decoration: none!important;   
    font-weight: 600;

    @media only screen and (min-width: 319px) and (max-width: 450px) {
    
    margin-bottom: 10px;

}

`
export const CustomLinkDrop = styled(Link)`

   
    color: #263238!important;
    text-decoration: none!important;   
    font-weight: 600;

   &:hover{
      color: #027467;
   }
`