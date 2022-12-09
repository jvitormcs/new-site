import { CardName, CardText, Container } from "./styles"

export default (props) => {

       return(

        <Container>
             <img src={props.image}/>
             <CardText>{props.texto}</CardText>
             <CardName>{props.nome}</CardName>

        </Container>

       )
        
}  