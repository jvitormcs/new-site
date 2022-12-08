import React from "react"
import bgverdeImage from '../../assets/image1-home.png'
import ImpactBar from "../../components/ImpactBar"
import CasaCoracao from "../../assets/casa-coracao.png"
import Loja from "../../assets/loja.png"
import Recycle from "../../assets/recycle.png"
import CirclePlant from "../../assets/planta-circle.png"
import { Container, TopContainer, TitleContainer, MainTitle, SubTitle, Btn, VideoContainer, WaveContainer, BgVerde, TitleSolution, SolutionText, InfoSolutionView, PaperTexture, Title, Description, BarIcon, CardsContainer, ServicosContainer, DepoimentoContainer, ViewImages, ImageDepoimento, ViewFilInv, RowFilial, RowInvestimento, FilialImage, FilialTitle, InvestImage, InvestTitle, FilialDescription, InvestDescription, GroupFilial, GroupInvest, BtnRows } from "./styles"
import Cards from "../../components/Cards"
import Card1 from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"
import Card3 from "../../assets/card3.png"
import Card4 from "../../assets/card4.png"
import Fabiana from '../../assets/Fabiana.png'
import Nicole from '../../assets/Nicole.png'
import Eliane from '../../assets/Eliane.png'
import Filial from '../../assets/filial.png'
import Invest from '../../assets/invest.png'
import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate()

    const Impact = [

        {
            icone: CasaCoracao,
            valor: '60',
            texto: 'Clientes pessoas físicas'
        },
        {
            icone: Loja,
            valor: '5',
            texto: 'Clientes pessoas jurídicas'
        },
        {
            icone: Recycle,
            valor: '4',
            texto: 'Eventos que fizemos a gestão dos resíduos'
        },
        {
            icone: CirclePlant,
            valor: '2',
            texto: 'Toneladas de resíduos compostados'
        },

    ]

    const Services = [
        {
            image: Card1,
            title: 'Coleta seletiva para residências',
            description: 'Passamos na sua casa, coletamos seus resíduos recicláveis e orgânicos e garantimos a destinação correta.',
            caminho: '/coleta-residencia'
        },
        {
            image: Card2,
            title: 'Coleta seletiva para empresas',
            description: 'Também fazemos coleta seletiva para restaurantes, bares, hotéis e condomínios de acordo com a necessidade de cada cliente.',
            caminho: '/coleta-empresas'
        },
        {
            image: Card3,
            title: 'Logística reversa',
            description: 'Nós fazemos parcerias com outras empresas e gerenciamos os seus resíduos, assegurando a prática de política de logística reversa.',
            caminho: '/logistica-reversa'
        },
        {
            image: Card4,
            title: 'Evento lixo zero',
            description: 'Se você quer que seu evento esteja em sintonia com o meio ambiente, não pode deixar de pensar em uma gestão de resíduos correta e eficiente!',
            caminho: '/lixo-zero'
        },
    ]

    return(

        <Container>
            <TopContainer>

                <TitleContainer>
                    <MainTitle>Temos um sonho: <br/> um mundo sem lixo</MainTitle>
                    <SubTitle>Somos uma empresa que trabalha para regenerar o planeta que chamamos de lar, atendemos pessoas que desejam ter um estilo de vida mais consciente através de uma economia circular, ética e sustentável. Venha com a gente fazer parte deste sonho. 💚</SubTitle>
                    <Btn onClick={() => {
                        window.location.href = `https://wa.me/5511912417855`
                    }}>Saiba mais</Btn>
                </TitleContainer>

                <VideoContainer>

                <iframe width="853" height="480" src="https://www.youtube.com/embed/oo5PAI_41qo" title="REALIXO - POR UMA CIDADE SUSTENTÁVEL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   

                </VideoContainer>

            </TopContainer>
            
            <WaveContainer></WaveContainer>

            <BgVerde>
                <img src={bgverdeImage} className={'responsivel'} alt="uma mão de uma pessoa está segurando uma tabua com legumes cortados enquanto a outra mão os derruba em um cesto, no fundo tem cenouras e outros legumes cortados"  />

                <InfoSolutionView>

                <TitleSolution>Criamos soluções <br/> sustentáveis junto com você</TitleSolution>
                <SolutionText>Hoje, estima-se que cada brasileiro gera 1 kg de resíduo por dia e, infelizmente, menos de 3% do resíduo seco é reciclado no Brasil. Além disso, 99% dos resíduos orgânicos é encaminhado diretamente a aterros sanitários, incineradores ou lixões, gerando gás poluente que é emitido na atmosfera.</SolutionText>

                <SolutionText>Com nosso serviço de <strong>coleta de resíduos orgânicos e recicláveis </strong>podemos mudar essa realidade, e você pode fazer parte dessa solução!</SolutionText>
                </InfoSolutionView>
            </BgVerde>

            <PaperTexture>

                <Title cor='preto'>Nosso impacto positivo</Title>
                <Description cor='preto'>Confira o impacto positivo em números após 7 meses de operações da Realixo:</Description>

            <BarIcon>

               {Impact?.map((item) => ( <ImpactBar key={item.valor} icone={item.icone} valor={item.valor} texto={item.texto} />))}
            </BarIcon>
            </PaperTexture>

            <ServicosContainer>

                <Title cor='branco'>Serviços</Title>

            <CardsContainer>

            {Services?.map(item => (<Cards key={item.title} image={item.image} title={item.title} description={item.description} navigation={item?.caminho}/>))}

            </CardsContainer>
            </ServicosContainer>

            <DepoimentoContainer>

                <Title cor='branco'>Depoimentos</Title>

                <ViewImages>
                    <ImageDepoimento src={Fabiana} />
                    <ImageDepoimento src={Nicole} />
                    <ImageDepoimento src={Eliane} />
                </ViewImages>

            </DepoimentoContainer>


            <ViewFilInv>

                <RowFilial>

                    <FilialImage src={Filial} />
                    <GroupFilial>
                    <FilialTitle>Abra uma filial</FilialTitle>
                    <FilialDescription>Você também pode colocar a mão na massa e fazer parte desta rede de pessoas que trabalham diretamente pela construção de um mundo mais sustentável e sem lixo. Clique no botão abaixo para saber como ter uma franquia da Realixo na sua cidade.</FilialDescription>
                        <BtnRows onClick={()=> {
                            scrollTo({top: 0, behavior: "smooth"})
                            navigate('/abra-filial')
                        }}>Saiba mais</BtnRows>
                    </GroupFilial>
                </RowFilial>

                <RowInvestimento>
                    <InvestImage src={Invest} />
                <GroupInvest>
                    <InvestTitle>Invista na Realixo</InvestTitle>
                    <InvestDescription>Se você se identificou com o nosso propósito, quer fazer parte desse movimento e ter um alto retorno no capital nos próximos 5-7 anos, pode investir na nossa empresa!</InvestDescription>
                    <BtnRows onClick={() => {
                        window.location.href = `https://www.realixo.com.br/investidores/pt/`
                    }}>Saiba mais</BtnRows>
                </GroupInvest>
                </RowInvestimento>

            </ViewFilInv>

        </Container>
        
    )


}


export default Home