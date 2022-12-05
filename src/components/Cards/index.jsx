import { CardButton, CardDescription, CardTitle, Container } from "./styles"

export default (props) => {

       return(

        <Container>
             <img src={props.image}/>
             <CardTitle>{props.title}</CardTitle>
             <CardDescription>{props.description}</CardDescription>
             <CardButton onClick={() => {
                window.location.href = `${props.navigation}`
             }}>Saiba mais</CardButton>

        </Container>

       )
        
}  