import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { NavContainer } from "./styles";
import Logo from '../../assets/new_logo.png'
const Menu = () => {

    const expand = 'md'

    return(
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to={'/quem-somos'}>Quem Somos</Link>
                  <NavDropdown
                    title="Serviços"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/coleta-residencia">Coleta seletiva para residências</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/coleta-empresas">Coleta seletiva para empresas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logistica-reversa">Logística reversa</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/lixo-zero">Evento lixo zero</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href='https://blog.realixo.com.br'>Blog</Nav.Link>
                  <Nav.Link href='/list'>Fale Conosco</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
          </NavContainer>
    )
}

export default Menu