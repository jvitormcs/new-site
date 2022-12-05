import React, { useEffect } from "react";
import { BgVerde, Container, GroupMission, GroupText, Mission, MissionDescription, MissionDescriptionBold, MissionTitle, QuemSomosReverseRow, QuemSomosRow, TextHead, TitleInitial, TitleMiddle, WaveContainer } from "./styles";
import ImageTopo from '../../assets/Ilustração_1_quem somos.svg'
import ImageSecondTopo from '../../assets/Ilustração_2_quem somos.svg'
import Andrea from '../../assets/equipe/Andrea.png'
import Fabiana from '../../assets/equipe/Fabiana.png'
import Laura from '../../assets/equipe/Laura.png'
import Clarisse from '../../assets/equipe/Clarisse.png'
import Elo from '../../assets/equipe/Elo.png'
import Fran from '../../assets/equipe/Fran.png'
import Gabi from '../../assets/equipe/Gabi.png'
import Joao from '../../assets/equipe/Joao.png'
import JoaoBaptista from '../../assets/equipe/JoaoBaptista.png'
import Mafe from '../../assets/equipe/Mafe.png'
import Vanessa from '../../assets/equipe/Vanessa.png'
import EquipeCard from "../../components/Equipe";

const QuemSomos = () => {

        useEffect(()=>{

            localStorage.setItem('local', 'Quem Somos')

        },[])

    const equipe =[
        {
            image: Andrea, 
            frase: '“Existem aqueles que acreditam que o poder está lá em cima e não percebem que, na realidade, está no coração das grandes massas.”',
            mencao: 'José Pepe Mujica',
            nome: 'Andrea',
            bio: 'Nasceu na Itália, mas sempre se sentiu um cidadão do mundo. Desde que começou a conhecer os problemas ambientais que afligem o Planeta Terra, ele estudou Economia para o Desenvolvimento Sustentável na Universidade de Roma e trabalhou por 6 anos na Greenpeace. Amante da arte, filosofia, yoga, boa comida e vinho, animais e seres humanos corajosos, encontrou na Realixo a forma de servir as pessoas que pretendem ter um estilo de vida mais consciente, através de uma economia circular (lixo zero), ética e sustentável.', 
            sustenta: 'Comprar comida local, fresca e sazonal, produzida de forma ética e sustentável por pessoas com belos sorrisos no rosto e com uma história para contar', 
            cargo:'Fundador' 
        },
        {
            image: Clarisse, 
            frase: '“Eu não posso fazer todo o bem que o mundo precisa, mas o mundo precisa de todo o bem que eu posso fazer.”',
            mencao: '',
            nome: 'Clarisse',
            bio: 'Não vive sem música, tem uma playlist pra cada momento do dia. Gosta de viajar e de fazer trilhas que terminam com banhos de cachoeira. Adora conhecer unidades de conservação e observar cada detalhe da paisagem nesses ambientes naturais.', 
            sustenta: 'cozinhar alimentos de origem vegetal.', 
            cargo:'Designer gráfico' 
        },
        {
            image: Elo, 
            frase: '“É necessário se espantar, se indignar e se contagiar, só assim é possível mudar a realidade.”',
            mencao: 'Nise da Silveira',
            nome: 'Eloísa (Elo)',
            bio: 'Amo arte, desenhar, costurar, pintar, criar e dar novos significados para coisas e objetos que a nossos olhos não tem mais valor. Gosto de ler e estudar sobre a relação do homem com o Planeta Terra. Amo animais e ajudar ONGs de proteção animal! Tenho uma gatinha que resgatei da rua e se chama Gaia.', 
            sustenta: 'amo fazer meus próprios cosméticos caseiros e DIY reaproveitando as coisas.', 
            cargo:'Marketing' 
        },
        {
            image: Fabiana, 
            frase: '“Se queremos que a espécie sobreviva, é o mundo que fizemos que temos que mudar.”',
            mencao: 'Skinner',
            nome: 'Fabiana de Souza',
            bio: 'Sua linguagem de amor é o tempo de qualidade, gosta de observar como as pessoas interagem e o que as move. É adepta ao minimalismo e ama compartilhar dicas de sustentabilidade. Aprende constantemente se relacionando com pessoas com o mesmo propósito que ela: diminuir a sua pegada ecológica.', 
            sustenta: 'Gerar o menor lixo possível, saindo sempre com minha garrafa, copo e recusando objetos de uso único.', 
            cargo:'Marketing' 
        },
        {
            image: Fran, 
            frase: '“Se não nós, se não agora. Quem? Quando?”',
            mencao: '',
            nome: 'Francine',
            bio: 'Francine é apaixonada por viagens, causas políticas, sociais e tudo que envolva a minoria social de alguma forma. Ama estudar, aprender e ensinar. Acredita que a cura e ascensão do Planeta como um todo deve ser cuidada em todos os aspectos, começando pelas questões básicas, da sobrevivência humana até o autoconhecimento. Mestre Reiki, professora de meditação e terapeuta Holística, defende que compartilhar amor e respeito é uma força para ajudar a humanidade.', 
            sustenta: 'mostrar como o veganismo é uma das formas mais eficientes de salvar o Planeta… se não a mais eficiente.', 
            cargo:'Gerente de Marketing' 
        },
        {
            image: Gabi, 
            frase: '“Não espere a mudança. Faça ela acontecer!”',
            mencao: '',
            nome: 'Gabi',
            bio: 'Gabi é canceriana, com ascendente em leão. Mora no interior de São Paulo, em uma chácara com seus seis filhos peludos. Desde pequena teve muito contato com a natureza e foi sempre educada a cuidar do meio ambiente. Gosta muito das suas plantinhas e conversa com elas todos os dias.', 
            sustenta: 'pegar materiais que iriam para o descarte e transformá los em coisas úteis, como vasos', 
            cargo:'Marketing' 
        },
        {
            image: JoaoBaptista, 
            frase: '“A água é o veículo da natureza.”',
            mencao: 'Leonardo da Vinci',
            nome: 'João Baptista',
            bio: 'Apaixonado por números e por tudo que pode ser medido ou padronizado, o João sempre teve um olhar crítico ao que um dia pode acabar. Desse estilo de vida veio a preocupação com o Meio Ambiente, começando pela água e chegando à Economia Circular. Engenheiro Civil e pós-graduado em Análise de Investimentos, viu na sustentabilidade uma forma de utilizar os números a favor do Planeta. É pai de uma gatinha Maine Coon chamada Roma e morre de amores por um miado choroso.', 
            sustenta: 'diminuir a minha pegada ecológica através de hábitos de consumo consciente.', 
            cargo:'Gerente de Operações' 
        },
        {
            image: Joao, 
            frase: '“Devemos aprender a errar para que possamos crescer constantemente”',
            mencao: '',
            nome: 'João Vitor',
            bio: 'João é escorpiano, com ascendente em capricórnio. Apaixonado em cantar, tocar violão, ukulele e desenhar personagens de animações. Adora ler livros filosóficos, sobre espiritualidade, fotografar e observar a natureza. Gosta de conhecer diferentes pessoas e aprender com elas. Acredita na natureza como uma extensão do sagrado, onde cada um pode tocar, sentir e fazer escolhas.', 
            sustenta: 'Adora plantar meus próprios temperos e algumas verduras.', 
            cargo:'Desenvolvedor web' 
        },
        {
            image: Laura, 
            frase: '“ Não te esqueças de que a terra adora sentir teus pés descalços e de que o vento anseia por brincar com teus cabelos.”',
            mencao: 'Khalil Gibran',
            nome: 'Laura Luz',
            bio: 'Laura, mãe da Rosa, graduada em Naturologia e pós-graduanda em Gine-Ecologia Natural. Ama desde sempre andar descalça, flores, árvores, animais e estar na Natureza. Ama música e bons livros. Desde criança prática compostagem e mexer na terra é terapêutico. Há 5 anos vende produtos ecológicos acreditando que pequenas mudanças fazem um mundo mais bonito e gentil para a Mãe Terra, propagando o consumo consciente.', 
            sustenta: 'Plantar, mexer na terra, compostar e pisar na grama', 
            cargo:'Operação' 
        },
        {
            image: Mafe, 
            frase: '“A mente a serviço do coração!”',
            mencao: '',
            nome: 'Mafe',
            bio: 'Mafe é virginiana, adora estar em contato com a natureza, fazer trabalhos voluntários e viajar. Acredita que estamos aqui para um bem maior, logo, segue fazendo sua parte em disseminar a importância do meio ambiente para a nossa evolução espiritual. Para Mafe, Mãe Terra é sagrada e inegociável. Adora fazer yoga, meditar, ler e escrever. Dançar é sua arte, tais como desenhar e cozinhar.', 
            sustenta: 'Adora fazer tudo manualmente', 
            cargo:'Marketing' 
        },
        
    ]

    return(

        <Container>
            <TitleInitial>Quem Somos</TitleInitial>

            <QuemSomosRow>
                <GroupText>

                <TextHead>
                Somos um grupo de pessoas diferentes pelas suas histórias, estudos, nacionalidades, que colocam os seus talentos e competências a serviço da natureza por meio de uma empresa necessária: a Realixo.
                </TextHead>
                
                <TextHead>
                Acreditamos na ciência moderna e na sabedoria dos povos nativos que indicam a urgência de ações cotidianas concretas para restabelecer um equilíbrio planetário abalado há anos.
                </TextHead>
                
                </GroupText>
                <img src={ImageTopo} className={'responsible'} alt="" />

            </QuemSomosRow>

            <QuemSomosReverseRow>
                <GroupText direcao="reverse">

                <TextHead>
                Somos um grupo de pessoas diferentes pelas suas histórias, estudos, nacionalidades, que colocam os seus talentos e competências a serviço da natureza por meio de uma empresa necessária: a Realixo.
                </TextHead>
                
                <TextHead>
                Acreditamos na ciência moderna e na sabedoria dos povos nativos que indicam a urgência de ações cotidianas concretas para restabelecer um equilíbrio planetário abalado há anos.
                </TextHead>
                
                </GroupText>
                <img src={ImageSecondTopo} className={'responsible'}  alt="" />

            </QuemSomosReverseRow>

            <WaveContainer/>
            <BgVerde>

                <GroupMission>
                <MissionTitle>Nossa missão</MissionTitle>
                <MissionDescription>Criar um mundo sem lixo, por meio de uma economia circular, ética e sustentável.</MissionDescription>
                </GroupMission>

                <GroupMission>
                <MissionTitle>Visão</MissionTitle>
                <MissionDescription>A parte da população mundial que deseja ter um estilo de vida mais consciente e harmonioso está em rápido crescimento. Para isso, consumirá cada vez mais bens e serviços produzidos de forma ética, local e sustentável.</MissionDescription>
                </GroupMission>

                <GroupMission>
                <MissionTitle>Valores</MissionTitle>
                <MissionDescriptionBold>Alguns valores que nos orientam em nossas escolhas e decisões de negócios:</MissionDescriptionBold>
                <MissionDescription>Cooperação com realidades locais, nacionais e internacionais alinhadas aos nossos valores;</MissionDescription>
                <MissionDescription>Salários justos para todos os componentes da cadeia produtiva;</MissionDescription>
                <MissionDescription>Incentivo para encontrar soluções criativas;</MissionDescription>
                <MissionDescription>Estudo, pesquisa e desenvolvimento;</MissionDescription>
                <MissionDescription>Lealdade e confiança mútua;</MissionDescription>
                <MissionDescription>Respeito pela diversidade;</MissionDescription>
                <MissionDescription>Respeito pela natureza;</MissionDescription>
                <MissionDescription>Experimentação;</MissionDescription>
                <MissionDescription>Determinação;</MissionDescription>
                <MissionDescription>Coragem;</MissionDescription>
                <MissionDescription>Ação.</MissionDescription>
                </GroupMission>
                
            </BgVerde>
                <Mission/>

            <TitleMiddle>Quem Somos</TitleMiddle>


            {equipe?.map(item => <EquipeCard image={item?.image} mencao={item?.mencao} bio={item?.bio} frase={item?.frase} sustenta={item?.sustenta} nome={item?.nome} cargo={item?.cargo}/> )}
        </Container>

    )

}

export default QuemSomos