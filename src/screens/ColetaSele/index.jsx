import React, { useEffect, useState } from "react"
import Primeiro from "../../assets/primeiro.png"
import Segundo from "../../assets/segundo.png"
import Terceiro from "../../assets/terceiro.png"
import Quarto from "../../assets/quarto.png"
import GreenPlant from "../../assets/green-plant.png"
import WhiteHouse from "../../assets/white-house.png"
import GreenCalendar from "../../assets/green-calendar.png"
import WhitePlant from "../../assets/white-plant.png"
import GreenCo from "../../assets/green-co.png"
import WhiteRecycle from "../../assets/white-recycle.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, VideoContainer, WaveContainer, BgVerde, SolutionText, InfoSolutionView,  ViewFunciona, ViewCards, TitleImpact, TitleFunciona, Planos, Title, ServicosContainer, ContainerDepoimento, ViewCardsDepoimento, ImagemDepoimento, FormSubTitle, FormContainer, FormRes, ResInput, FormButton, ViewForm, ViewCardsPlan, TextAlert } from "./styles"
import Funciona from "../../components/Funciona"
import Plano from "../../components/Plano"
import Beneficios from "../../components/Beneficios"
import Ana from "../../assets/Ana.png"
import FabianaDepoimento from "../../assets/FabianaDepoimento.png"


const ColetaSele = () => {
    
    useEffect(()=>{

        localStorage.setItem('local', 'Coleta para residências')

    },[])

    const Caixas = [

        {
            icone: Primeiro,
            texto: 'Você escolhe o plano de coleta que mais se encaixa com a sua rotina. Consulte nossos planos aqui.'
        },
        {
            icone: Segundo,
            texto: 'Você escolhe o plano de coleta que mais se encaixa com a sua rotina. Consulte nossos planos aqui.'
        },
        {
            icone: Terceiro,
            texto: 'Recolhemos os resíduos orgânicos e recicláveis na porta da sua casa ou prédio.'
        },
        {
            icone: Quarto,
            texto: 'Nossa equipe de triagem entra em ação, destinando os seus materiais para cada parceira de reciclagem e compostagem.'
        },

    ]

    const plan = [

        {title: 'Básico', description: 'Sempre que você quiser, leve seus resíduos recicláveis​​ e orgânicos até a nossa sede.', valor: 'R$ 14,90/mês'},
        {title: 'Com coleta quinzenal', description: 'Nós coletamos os seus resíduos recicláveis e orgânicos no conforto da sua casa!', valor: 'R$ 22,00/mês'},
        {title: 'Com coleta semanal', description: 'Nós coletamos os seus resíduos recicláveis e orgânicos conforto da sua casa!', valor: 'R$ 44,00/mês'}

    ]

    const beneficios = [
        
        {icone: GreenPlant, title:'Impacto ambiental:', description:'Você ajuda o meio ambiente no conforto da sua casa, mesmo sem tempo e com pouco investimento. Você pode ter um impacto positivo no meio ambiente mesmo morando na cidade.', bg:'#f9f9f9', cor:'#027467'},
        {icone: WhiteHouse, title:'Conforto:', description:'Passamos na sua casa para recolher o seu resíduo e dar a destinação correta.', bg:'#027467', cor:'#f9f9f9'},
        
        {icone: GreenCalendar, title:'Facilidade:', description:'Combinamos com você o melhor dia para coletar o seu resíduo.', bg:'#f9f9f9', cor:'#027467'},
        {icone: WhitePlant, title:'Combate ao aquecimento global:', description:'Trabalhamos para que o seu alimento volte para a natureza porque, com a compostagem, podemos diminuir o desperdício e a emissão dos gases de efeito estufa.', bg:'#027467', cor:'#f9f9f9'},

        {icone: GreenCo, title:'Pegada de carbono:', description:'Com o nosso serviço, você ajuda a diminuir a quantidade de gases de efeito estufa, pois estamos perto de você e garantimos que seus resíduos serão compostados e reciclados.', bg:'#f9f9f9', cor:'#027467'},
        {icone: WhiteRecycle, title:'Socioambiental:', description:'Doamos os resíduos recicláveis para cooperativas de catadores', bg:'#027467', cor:'#f9f9f9'},

    ]

    const [data, setData] = useState({
        nome: '',
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
    const [cepTrue, setCepTrue] = useState(false)

    const handleSendForm = async (body) => {

        fetch(`${BASE_URL}/residencial`, {
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
                    <MainTitle>Você pode ajudar a salvar o planeta com menos de R$0,75 por dia, sem sair de casa</MainTitle>
                    <SubTitle>Experimente o nosso serviço de Coleta de Resíduos Recicláveis e Orgânicos e comece a reduzir o seu impacto ambiental conosco.</SubTitle>
                    <Btn onClick={() => {
                        window.location.href = `https://wa.me/5511912417855`
                    }}>Saiba Mais</Btn>
                </TitleContainer>

                

            </TopContainer>
            
            <WaveContainer/>

            <ViewFunciona>

                <TitleFunciona>Como funciona</TitleFunciona>

                    <ViewCards>

                    {Caixas?.map((item,index) => <Funciona key={index} icone={item?.icone} texto={item?.texto} />)}

                    </ViewCards>


            </ViewFunciona>


            <BgVerde>

            <InfoSolutionView>

                <TitleImpact>Meu impacto, minha responsabilidade</TitleImpact>
                <SolutionText>Você recebe um kit para colocar os orgânicos, faz a separação correta e nós fazemos a coleta para você na porta da sua casa. Após isso, compostamos o material orgânico e enviamos os resíduos recicláveis ​​para o destino correto.</SolutionText>

            </InfoSolutionView>

            <VideoContainer>

                <iframe width="530" height="300" src="https://www.youtube.com/embed/oo5PAI_41qo" title="REALIXO - POR UMA CIDADE SUSTENTÁVEL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   

            </VideoContainer>

            </BgVerde>

            <Planos>

                <Title cor='preto'>Nossos Planos</Title>

                <ViewCardsPlan>

                    {plan?.map((item,index) => <Plano key={index} title={item?.title} description={item?.description} valor={item?.valor} />)}

                </ViewCardsPlan>

            </Planos>
            
            <ServicosContainer>

                <Title>Benefícios do nosso serviço</Title>
                
                {beneficios?.map((item,index) => <Beneficios key={index} icone={item?.icone} title={item?.title} description={item?.description} cor={item?.cor} bg={item?.bg} />)}


            </ServicosContainer>


                <ContainerDepoimento>

                <Title>Depoimentos</Title>

                <ViewCardsDepoimento>
                
                <ImagemDepoimento src={Ana} />
                <ImagemDepoimento src={FabianaDepoimento} />
                

                </ViewCardsDepoimento>

                </ContainerDepoimento>


            <FormContainer>
                <Title cor="preto">Tem interesse em ser cliente da Realixo?</Title>
                <FormSubTitle cor="preto">Preencha os dados abaixo e experimente 1 mês grátis do nosso serviço de coleta seletiva</FormSubTitle>
            <ViewForm>

                <FormRes>

                    <ResInput type={"text"} onChange={e => {setData({...data, nome: e.target.value})}} placeholder="Seu nome" required />
                    <ResInput type={"email"} onChange={e => {setData({...data, email: e.target.value})}} placeholder="E-mail" required/>
                    <ResInput type={"tel"} onChange={e => {setData({...data, telefone: e.target.value})}} placeholder="WhatsApp" required/>
                    <ResInput type={"text"} onChange={ (e)=>{
                    handleverifyCep(e.target.value)
                } } on placeholder="CEP" required/>
                    {cepTrue === true ? <TextAlert>CEP invalido!</TextAlert> : ''}
                </FormRes>
                <FormButton onClick={ ()=>{
                    handleSendForm(data)
                }}>Enviar</FormButton>
            </ViewForm>
            
            </FormContainer>


        </Container>
        
    )

            }

export default ColetaSele