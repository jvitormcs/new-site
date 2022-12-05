import React, { useEffect } from "react";
import { Card, Cargo, CargoDescription, Container, Detalhe, List, ListItem, SubTitle, Title } from "./styles";

const TrabalheCo = () => {

    useEffect(()=>{

        localStorage.setItem('local', 'Trabalhe Conosco')

    },[])

    return(

        <Container>

            <Title>Trabalhe Conosco</Title>
            <SubTitle>Cargos em Aberto:</SubTitle>

            <Card>
                <Cargo>Catadores</Cargo>
                <CargoDescription>Procuramos catadores de qualquer idade, sexo, orientação sexual, cultura, nacionalidade, religião, com ou sem experiência em qualquer região do Brasil para oferecer um trabalho em tempo integral de 44 horas / semana.</CargoDescription>

                <Detalhe>O catador será encarregado de:</Detalhe>
                <List>

                    <ListItem>Recolher os resíduos dos nossos clientes com um meio de transporte elétrico que será disponibilizada por nós;</ListItem>
                    <ListItem>Separar os resíduos recicláveis que chegam em nossa sede.</ListItem>

                </List>

                <Detalhe>Se você tem interesse no cargo, escreva um e-mail para contato@realixo.com, com o assunto “Candidatura a catador(a)”, indicando:</Detalhe>
                <List>

                    <ListItem>Nome e Sobrenome;</ListItem>
                    <ListItem>Cidade de residência e CEP;</ListItem>
                    <ListItem>Tem vontade de trabalhar em outra cidade também?</ListItem>
                    <ListItem>Motivação pela qual você deseja trabalhar conosco.</ListItem>

                </List>
            </Card>

            <Card>
                <Cargo>Chefe da nova central da Realixo</Cargo>
                <CargoDescription>Procuramos uma pessoa de qualquer idade, sexo, orientação sexual, cultura, nacionalidade, religião, com ou sem experiência em qualquer região do Brasil, para oferecer trabalho a tempo parcial de 24 horas / semana.</CargoDescription>

                <Detalhe>A pessoa terá as seguintes responsabilidades</Detalhe>
                <List>

                    <ListItem>Buscar um espaço para futuras operações da Realixo;</ListItem>
                    <ListItem>Pesquisar e entrevistar catadores;</ListItem>
                    <ListItem>Formar os catadores;</ListItem>
                    <ListItem>Verificar as operações;</ListItem>
                    <ListItem>Gerenciar uma página do Facebook e uma página do Instagram da Realixo na sua região;</ListItem>
                    <ListItem>Fazer uma visita guiada por mês para clientes e escolas para mostrar a eles o espaço da sede da Realixo e como as operações acontecem;</ListItem>
                    <ListItem>Fazer marketing local para encontrar novos clientes entre: indivíduos, condomínios, restaurantes, lojas e empresas locais;</ListItem>
                    <ListItem>Participar de uma reunião semanal com a gerência da Realixo.</ListItem>

                </List>

                <Detalhe>Se você tem interesse no cargo, escreva um e-mail para contato@realixo.com, com o assunto “Candidatura a catador(a)”, indicando:</Detalhe>
                <List>

                    <ListItem>Nome e Sobrenome;</ListItem>
                    <ListItem>Cidade de residência e CEP;</ListItem>
                    <ListItem>Tem vontade de trabalhar em outra cidade também?</ListItem>
                    <ListItem>Motivação pela qual você deseja trabalhar conosco.</ListItem>

                </List>
            </Card>

        </Container>

    )

}

export default TrabalheCo