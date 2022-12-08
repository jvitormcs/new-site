import React, { useEffect, useState } from "react"
import Primeiro from "../../assets/primeiro.png"
import Segundo from "../../assets/segundo.png"
import Terceiro from "../../assets/terceiro.png"
import Quarto from "../../assets/quarto.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, WaveContainer, BgVerde, SolutionText, InfoSolutionView,  ViewFunciona, ViewCards, TitleFunciona, Title,  FormSubTitle, FormContainer, FormRes, ResInput, FormButton, ViewForm, ImageCotratar, TitleFilial, BtnTop } from "./styles"
import Funciona from "../../components/Funciona"
import ImagemSede from "../../assets/filial.png"
import { BASE_URL } from "../../Config/GLOBAL_URL"


const AbraFili = () => {
    
    useEffect(()=>{

        localStorage.setItem('local', 'Filial')

    },[])

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/filial`, {
            headers:{
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(body)
            }).then(async response => { await response.status
  
              window.location.href = '/agradecimento'
          })

    }

    const Caixas = [

        {
            icone: Primeiro,
            texto: 'Marcamos uma ligação com nosso CEO.'
        },
        {
            icone: Segundo,
            texto: 'Mostramos os resultados que a Realixo alcançou em sua primeira sede aberta em Pinheiros (São Paulo) e os planos para os próximos produtos e serviços que estamos criando.'
        },
        {
            icone: Terceiro,
            texto: 'Se você gostar da ideia de abrir uma sede da Realixo, enviaremos as condições contratuais da franquia.'
        },
        {
            icone: Quarto,
            texto: 'Seu sonho de abrir um negócio que contribua para um mundo mais sustentável, ético e feliz pode começar a ser realizado!'
        },

    ]


    const [data, setData] = useState({
        nome: '',
        empresa: '',
        telefone:'',
        email: '',
        cidade: '',
        uf: ''
    })

    return(

        <Container>
            <TopContainer>

                <TitleContainer>
                    <MainTitle>Quer abrir um negócio que gere lucro e também ajude o meio ambiente?</MainTitle>
                    <SubTitle>Queremos atuar em todo o Brasil e, para isso, precisamos de pessoas compromissadas a trabalharem em prol de uma economia circular, ética e sustentável. Esse tipo de economia já é muito lucrativa na Europa e nos Estados Unidos. Nos últimos anos está se tornando assim também no Brasil, e nos próximos anos será cada vez mais!</SubTitle>
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

                <TitleFilial>Por que abrir uma filial da Realixo?</TitleFilial>
                <SolutionText>Começar um negócio do zero é muito complexo. Mantê-lo aberto ao longo do tempo é ainda menos fácil. Marketing e tecnologia são aspectos fundamentais, mas nem todos têm recursos financeiros para cuidar deles. Por isso abrir uma filial da Realixo permite que você cuide apenas das operações e nós cuidamos do marketing e da tecnologia!</SolutionText>
                <SolutionText>Com novas sedes da Realixo espalhadas por todo o Brasil, fortalecemos cada vez mais nosso compromisso com a construção de um mundo sem lixo. É por meio dessa rede de pessoas engajadas e comprometidas com a causa ambiental que promovemos um impacto socioambiental cada vez maior.</SolutionText>
                
            </InfoSolutionView>

                <ImageCotratar src={ImagemSede} />

            </BgVerde>



            <FormContainer>
                <Title cor="preto">Tem interesse em ser cliente da Realixo?</Title>
                <FormSubTitle cor="preto">Preencha os dados abaixo e nossa equipe entrará em contato com você</FormSubTitle>
            <ViewForm>

                <FormRes>

                    <ResInput type={"text"} onChange={e => {setData({...data, nome: e.target.value})}} placeholder="Seu nome e Sobrenome" required />
                    <ResInput type={"email"} onChange={e => {setData({...data, email: e.target.value})}} placeholder="E-mail" required/>
                    <ResInput type={"tel"} onChange={e => {setData({...data, telefone: e.target.value})}} placeholder="WhatsApp" required/>
                    <ResInput type={"text"} onChange={e => {setData({...data, cidade: e.target.value})}} placeholder="Cidade" required/>
                    <ResInput type={"text"} onChange={e => {setData({...data, uf: e.target.value})}} placeholder="UF" required/>

                </FormRes>
                <FormButton onClick={()=>{
                    handleSendForm(data)
                }}>Enviar</FormButton>
            </ViewForm>
            
            </FormContainer>


        </Container>
        
    )


}


export default AbraFili