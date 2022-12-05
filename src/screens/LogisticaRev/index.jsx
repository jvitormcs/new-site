import React, { useEffect, useState } from "react"
import Primeiro from "../../assets/primeiro.png"
import Segundo from "../../assets/segundo.png"
import Terceiro from "../../assets/terceiro.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, WaveContainer, BgVerde, SolutionText, InfoSolutionView, PaperTexture,  ViewFunciona, ViewCards, TitleImpact, TitleFunciona, Planos, Title, ServicosContainer, ContainerDepoimento, ViewCardsDepoimento, ImagemDepoimento, FormSubTitle, FormContainer, FormRes, ResInput, FormButton, ViewForm, ImageCotratar, TitleRealixo } from "./styles"
import Funciona from "../../components/Funciona"
import ImagemSede from "../../assets/filial.png"
import { BASE_URL } from "../../Config/GLOBAL_URL"


const Logistica = () => {
    
    const Caixas = [

        {
            icone: Primeiro,
            texto: 'Marcamos uma ligação para que possamos entender a sua necessidade.'
        },
        {
            icone: Segundo,
            texto: 'Com base na natureza do seu produto e/ou serviço, propomos uma série de ações para promover a logística reversa.'
        },
        {
            icone: Terceiro,
            texto: 'Mostre seu compromisso com o meio ambiente para seus clientes!'
        },

    ]

    useEffect(()=>{

        localStorage.setItem('local', 'Logística Reversa')

    },[])

    const [data, setData] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
    })

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/logisReversa`, {
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

    return(

        <Container>
            <TopContainer>

                <TitleContainer>
                    <MainTitle>Você cuida da sua empresa enquanto nós cuidamos dos seus resíduos</MainTitle>
                    <SubTitle>Você tem um pequeno, médio ou grande negócio e quer que seus clientes vejam na prática o seu <strong>compromisso com o meio ambiente?</strong> Confie o gerenciamento dos resíduos de sua empresa a quem entende do assunto. Faça parte desse movimento e agregue valor ao seu negócio.</SubTitle>
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
                <SolutionText>A política reversa reduz a quantidade de resíduos destinados aos lixões e aterros sanitários, gerando um <strong>impacto ambiental positivo</strong>. Empresas que já se incluem nesse sistema têm <strong>maior valor social</strong> diante dos seus investidores e clientes por se enquadrar em um grande diferencial de sustentabilidade, além de lucrar com a reutilização de produtos.</SolutionText>
                <SolutionText>Com a implementação da logística reversa, ganha-se <strong>economia de matéria-prima</strong> oriunda da natureza, economia monetária na redução de custos e melhoria na visibilidade da marca. Além disso, é uma estratégia de marketing que permite aumentar a fidelidade do cliente e aumentar seus gastos com seus produtos e serviços.</SolutionText>

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
                    
                </FormRes>
                <FormButton onClick={()=>{
                    handleSendForm(data)
                }}>Enviar</FormButton>
            </ViewForm>
            
            </FormContainer>


        </Container>
        
    )


}


export default Logistica