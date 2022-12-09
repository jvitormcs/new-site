import React, { useEffect, useState } from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitterSquare, FaTiktok, FaSpotify, FaLinkedin } from "react-icons/fa";
import { BgContainer, Btn, Caixa, Group, GroupAccess, GroupInfo, GroupInput, IconGroup, Info, Link, Title } from "./styles";

const Footer = () => {

    const [message, setMessage] = useState({

        nome: '',
        email: '',
        mensagem: '',
        local: ''

    })

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/contact`, {
            headers:{
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(body)
            }).then(async response => { await response.status
  
              window.location.href = '/agradecimento'
          })

    }

    useEffect(()=>{

        const getLocal = localStorage.getItem('local')
        setMessage({...message, local: getLocal})

    },[])

    return(

        <BgContainer>
            <Group>
            <GroupInfo>
            <Title>REALIXO SERVIÇOS DE ECONOMIA <br></br> CIRCULAR E SUSTENTABILIDADE LTDA</Title>
                <Info>RUA CARD. ARCOVERDE, 719</Info>
                <Info>PINHEIROS, São Paulo - SP</Info>
                <Info>CEP: 05407-001</Info>
                <Info>CNPJ: 46.284.471/0001-70</Info>
            </GroupInfo>
            <GroupInfo>
                <Title>Atendimento</Title>
                <Info>WhatsApp: + 55 11 91241-7855</Info>
                <Info>contato@realixo.com</Info>
            </GroupInfo>

            <GroupInfo>
                <Title>Siga-nos nas redes sociais</Title>
                <IconGroup>
                    <Link href="https://www.facebook.com/REALIXO" target="_blank"><FaFacebook size={25}/></Link>
                    <Link href="https://www.linkedin.com/company/realixo/" target="_blank"><FaLinkedin size={25}/></Link>
                    <Link href="https://www.youtube.com/@realixo" target="_blank"><FaYoutube size={25}/></Link>
                    <Link href="https://www.instagram.com/eurealixo/" target="_blank"><FaInstagram size={25}/></Link>
                    <Link href="https://twitter.com/eurealixo" target="_blank"><FaTwitterSquare size={25} /></Link>
                    <Link href="https://www.tiktok.com/@realixo_br" target="_blank"><FaTiktok size={25}/></Link>
                    <Link href="https://open.spotify.com/show/3cuoq8OyoivIPl8H8syVCl" target="_blank"><FaSpotify size={25}/></Link>

                </IconGroup>
            </GroupInfo>

            </Group>

            <GroupAccess>
                <Title>Acesso rápido</Title>
                <GroupInfo>
                <Link href="/">Home</Link>
                <Link href="/quem-somos">Quem somos</Link>
                <Link href="">Blog</Link>
                <Link href="/#/trabalhe-conosco">Trabalhe Conosco</Link>
                <Link href="/investidores/pt/">Invista</Link>
                <Link href="/investidores/eng/">Invest</Link>
                </GroupInfo>
            </GroupAccess>
            
            <GroupInput>

                <Title>Fale conosco</Title>
                <GroupInfo>

                    <input type={"text"} onChange={e => {setMessage({...message, nome: e.target.value})}} placeholder="Seu Nome" required/>
                    <input type={"email"} onChange={e => {setMessage({...message, email: e.target.value})}} placeholder="Seu e-mail" required/>
                    <Caixa className="caixa" onChange={e => {setMessage({...message, mensagem: e.target.value})}} placeholder="Digite aqui sua mensagem" required/>
                    <Btn onClick={()=>{
                         
                        handleSendForm(message)

                    }}>Enviar</Btn>

                </GroupInfo>
            </GroupInput>
        </BgContainer>
       
    )

}

export default Footer