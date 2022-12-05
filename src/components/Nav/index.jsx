import {HashRouter , Routes, Route, Link } from 'react-router-dom'
import Home from '../../screens/Home'
import Menu from '../Menu';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Logo from '../../assets/new_logo.png'
import Footer from '../Footer';
import QuemSomos from '../../screens/QuemSomos';
import ColetaSele from '../../screens/ColetaSele';
import ColetaPJ from '../../screens/ColetaPJ';
import Logistica from '../../screens/LogisticaRev';
import LixoZero from '../../screens/GestaoResi';
import AbraFili from '../../screens/AbraFili';
import TrabalheCo from '../../screens/TrabalheConosco';
import Agradecimento from '../../screens/Agradecimento';
import FaleConosco from '../../screens/FaleConosco';
import { NavContainer } from './styles';

const Nave = () => {
    let expand = 'md'
    return(
        <HashRouter>
            
            <NavContainer>
      <Navbar expand={expand} className="mb-3">
          <Container fluid>
          <Navbar.Brand href="/"><img src={Logo} width="150px" className='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <a href="/"><img src={Logo} width="150px" className='logo'/></a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-md-center flex-grow-1 pe-3">
                  <Link to={'/quem-somos'}>Quem Somos</Link>
                  <NavDropdown
                    title="Serviços"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to={"/coleta-residencia"}>Coleta seletiva para residências</Link>
                    <NavDropdown.Divider />
                    <Link to={"/coleta-empresas"}>Coleta seletiva para empresas</Link>
                    <NavDropdown.Divider />
                    <Link to={"/logistica-reversa"}>Logística reversa</Link>
                    <NavDropdown.Divider />
                    <Link to={"/lixo-zero"}>Evento lixo zero</Link>
                  </NavDropdown>
                  <Nav.Link href='https://blog.realixo.com.br'>Blog</Nav.Link>
                  <Link to={'/list'}>Fale Conosco</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
          </NavContainer>
            <Routes>
                <Route exact path='/'  element={<Home/>}/>
                
                <Route path='/quem-somos' element={<QuemSomos/>} />
                <Route path='/coleta-residencia' element={<ColetaSele/>} />
                <Route path='/coleta-empresas' element={<ColetaPJ/>} />
                <Route path='/logistica-reversa' element={<Logistica/>} />
                <Route path='/lixo-zero' element={<LixoZero/>} />
                <Route path='/abra-filial' element={<AbraFili/>} />
                <Route path='/trabalhe-conosco' element={<TrabalheCo/>} />
                <Route path='/agradecimento' element={<Agradecimento/>} />
                <Route path='/list' element={<FaleConosco/>} />
            </Routes>
            <Footer />
        </HashRouter>
    )

}

export default Nave