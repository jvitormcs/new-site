import styled from "styled-components";

export const NavContainer = styled.nav`

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

`

