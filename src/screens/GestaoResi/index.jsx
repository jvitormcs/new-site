import React, { useEffect, useState } from "react"
import Primeiro from "../../assets/primeiro.png"
import Segundo from "../../assets/segundo.png"
import Terceiro from "../../assets/terceiro.png"
import Quarto from "../../assets/quarto.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, WaveContainer, BgVerde, SolutionText, InfoSolutionView,  ViewFunciona, ViewCards, TitleFunciona, Title,  FormSubTitle, FormContainer, FormRes, ResInput, FormButton, ViewForm, ImageCotratar, TitleGestao } from "./styles"
import Funciona from "../../components/Funciona"
import ImagemLixo from "../../assets/ImagemBGVerdeGestao.png"
import { BASE_URL } from "../../Config/GLOBAL_URL"


const LixoZero = () => {
    
    useEffect(()=>{

        localStorage.setItem('local', 'Gestão Resíduos')

    },[])

    const Caixas = [

        {
            icone: Primeiro,
            texto: 'Marcamos uma ligação para entendermos as características do seu evento e enviamos um orçamento.'
        },
        {
            icone: Segundo,
            texto: 'Organizamos a gestão de resíduos do seu evento.'
        },
        {
            icone: Terceiro,
            texto: 'Trabalhamos no dia do evento com uma equipe de profissionais experientes, para garantir a limpeza e a gestão dos seus resíduos.'
        },
        {
            icone: Quarto,
            texto: 'Após o evento, enviamos um relatório com os números de resíduos gerados, que poderá ser compartilhado em suas redes sociais, como faremos nas nossas.'
        },

    ]


    const [data, setData] = useState({
        nome: '',
        empresa: '',
        telefon: '',
        email: '',
        cidade: '',
        uf: ''
    })

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/gestResiduo`, {
            headers:{
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(body)
            }).then(async response => { await response.status
  
              window.location.href = '/agradecimento'
          })

    }

    return(

        <Container>
            <TopContainer>

                <TitleContainer>
                    <MainTitle>Realize seu evento lixo zero com a Realixo</MainTitle>
                    <SubTitle>Temos o compromisso de readequar a forma como lidamos com todo o resíduo sólido que é gerado em pequenos, médios e grandes eventos. Por meio da reciclagem e da compostagem, além da informação e conscientezação, promovemos a realização de eventos lixo zero.</SubTitle>
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

                <TitleGestao>Por que é importante que seu evento tenha uma gestão de resíduos eficiente?</TitleGestao>
                <SolutionText>As pessoas estão cada vez mais atentas às questões socioambientais. Muitas delas não aceitam mais que em um evento haja apenas um tipo de lixeira e elas realmente apreciam quando veem o recipiente correto para diferentes tipos de resíduos.</SolutionText>
                <SolutionText>Nossa equipe garante que as cestas nunca fiquem cheias, o que permite que as pessoas não joguem nada no chão. Durante o evento, os participantes poderão enquadrar o QR code que colocaremos próximo às cestas. Este QR code leva a uma página na internet criada por nós para explicar como separar adequadamente os resíduos. Na mesma página haverá a possibilidade de falar conosco através do nosso canal de Whatsapp, onde uma pessoa do nosso time de marketing se encarregará por responder os participantes.</SolutionText>
                <SolutionText>Antes, durante e depois do evento sua empresa poderá comunicar seu compromisso com o meio ambiente, por ter organizado um evento lixo zero!</SolutionText>

            </InfoSolutionView>

                <ImageCotratar src={ImagemLixo} />

            </BgVerde>



            <FormContainer>
                <Title cor="preto">Tem interesse em ser cliente da Realixo?</Title>
                <FormSubTitle cor="preto">Preencha os dados abaixo e nossa equipe entrará em contato com você</FormSubTitle>
            <ViewForm>

                <FormRes>

                <FormRes>

<ResInput type={"text"} onChange={e => {setData({...data, nome: e.target.value})}} placeholder="Seu nome e Sobrenome" required />
<ResInput type={"email"} onChange={e => {setData({...data, email: e.target.value})}} placeholder="E-mail" required/>
<ResInput type={"tel"} onChange={e => {setData({...data, telefone: e.target.value})}} placeholder="WhatsApp" required/>
<ResInput type={"text"} onChange={e => {setData({...data, cidade: e.target.value})}} placeholder="Cidade" required/>
<ResInput type={"text"} onChange={e => {setData({...data, uf: e.target.value})}} placeholder="UF" required/>

</FormRes>

                </FormRes>
                <FormButton onClick={()=>{
                    handleSendForm(data)
                }}>Enviar</FormButton>
            </ViewForm>
            
            </FormContainer>


        </Container>
        
    )


}


export default LixoZero