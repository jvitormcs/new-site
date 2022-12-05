import React, { useEffect, useState } from "react"
import Primeiro from "../../assets/primeiro.png"
import Segundo from "../../assets/segundo.png"
import Terceiro from "../../assets/terceiro.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, WaveContainer, BgVerde, SolutionText, InfoSolutionView,  ViewFunciona, ViewCards, TitleFunciona, Title,  FormSubTitle, FormContainer, FormRes, ResInput, FormButton, ViewForm, ImageCotratar, TitleRealixo, TextAlert } from "./styles"
import Funciona from "../../components/Funciona"
import ImagemSede from "../../assets/filial.png"
import { BASE_URL } from "../../Config/GLOBAL_URL" 


const ColetaPJ = () => {
    
    useEffect(()=>{

        localStorage.setItem('local', 'Coleta para Empresas')

    },[])

    const Caixas = [

        {
            icone: Primeiro,
            texto: 'Marcamos uma ligação para que possamos entender a sua necessidade.'
        },
        {
            icone: Segundo,
            texto: 'Damos a você informações e instruções simples para que seus funcionários possam fazer a separação adequada dos resíduos.'
        },
        {
            icone: Terceiro,
            texto: 'Mostre seu compromisso com o meio ambiente para seus clientes!'
        },

    ]


    const [data, setData] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        cep: ''
    })

    const handleverifyCep = async (valor ) => {

        console.log("valor", valor)
        let cepTratado = `${valor.replace('-', '')}`
        console.log("valor", cepTratado)

        setData({...data, cep: valor})
        
        const eNumero = (numero) => /^[0-9]+$/.test(numero);
         const cepValido = (cep) => cep.length == 8 && eNumero(cepTratado);
    const url = `https://viacep.com.br/ws/${cepTratado}/json/`;
    if (cepValido(cepTratado)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            setCepTrue(true)
        }else{
            setCepTrue(false)
        }

      }else{
        setCepTrue(true) 
    }

    }

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/empresa`, {
            headers:{
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
          }).then(async response => { await response.status

            if(response.status == 200 || response.ok == true ){
                window.location.href = '/agradecimento'
            }
        })

        

    }

    const [cepTrue, setCepTrue] = useState(false)

    return(

        <Container>
            <TopContainer>

                <TitleContainer>
                    <MainTitle>Quer que seu negócio tenha um impacto socioambiental positivo?</MainTitle>
                    <SubTitle>Nós da Realixo trabalhamos em prol de uma economia circular, ética e sustentável através do nosso serviço de coleta e destinação correta de resíduos recicláveis e orgânicos de restaurantes, bares, hotéis e condomínios. Faça parte desse movimento e agregue valor ao seu negócio. </SubTitle>
                    <Btn onClick={() => {
                        window.location.href = `https://wa.me/5511912417855`
                    }}>Saiba Mais</Btn>
                </TitleContainer>

                

            </TopContainer>
            
            <WaveContainer />

            <ViewFunciona>

                <TitleFunciona>Como funciona</TitleFunciona>

                    <ViewCards>

                    {Caixas?.map((item,index) => <Funciona key={index} icone={item?.icone} texto={item?.texto} />)}

                    </ViewCards>

            </ViewFunciona>


            <BgVerde>

            <InfoSolutionView>

                <TitleRealixo>Por que contratar a Realixo?</TitleRealixo>
                <SolutionText>É de responsabilidade individual, dentro de um contexto social, gerirmos de forma consciente tudo o que consumimos, produzimos e pra onde isso vai, especialmente se geramos resíduos em uma escala maior.</SolutionText>
                <SolutionText>Para que cada um possa fazer a sua parte para um mundo mais ético e sustentável, nós da Realixo disponibilizamos os nossos serviços por um <strong>valor acessível</strong>. Para que grandes e pequenos estabelecimentos possam fazer parte deste movimento e ajudar na construção de um mundo melhor, tendo a certeza de que seus resíduos recicláveis e orgânicos estão tendo a destinação correta.</SolutionText>
                <SolutionText>Além disso, ao contratar o nosso serviço, você também terá a oportunidade de comunicar seu <strong>compromisso com o meio ambiente</strong> aos seus clientes. Podemos criar uma série de posts nas redes sociais em que você estiver presente (nós estamos no Instagram, TikTok, Facebook, Linkedin, Youtube, Twitter, Whatsapp) utilizando nossa equipe!</SolutionText>

            </InfoSolutionView>

                <ImageCotratar src={ImagemSede} />

            </BgVerde>



            <FormContainer>
                <Title cor="preto">Tem interesse em ser cliente da Realixo?</Title>
                <FormSubTitle cor="preto">Preencha os dados abaixo e nossa equipe entrará em contato com você</FormSubTitle>
            <ViewForm>

                <FormRes>

                    <ResInput type={"text"} onChange={e => {setData({...data, nome: e.target.value})}} placeholder="Seu nome e Sobrenome" required />
                    <ResInput type={"text"} onChange={e => {setData({...data, empresa: e.target.value})}} placeholder="Nome da sua empresa" required/>
                    <ResInput type={"email"} onChange={e => {setData({...data, email: e.target.value})}} placeholder="E-mail" required/>
                    <ResInput type={"tel"} onChange={e => {setData({...data, telefone: e.target.value})}} placeholder="WhatsApp" required/>
                    <ResInput type={"text"} onChange={ (e)=>{
                    handleverifyCep(e.target.value)
                } } on placeholder="CEP" required/>
                    {cepTrue === true ? <TextAlert>CEP invalido!</TextAlert> : ''}

                </FormRes>
                <FormButton onClick={()=>{
                    handleSendForm(data)
                }}>Enviar</FormButton>
            </ViewForm>
            
            </FormContainer>


        </Container>
        
    )


}


export default ColetaPJ