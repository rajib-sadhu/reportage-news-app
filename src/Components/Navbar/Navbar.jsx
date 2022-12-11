import React from 'react';
import './navbar.css';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    
    
    
    <Navbar collapseOnSelect className='navbarDiv' expand="lg" bg="dark" variant="dark">
      <Container>

        {/*  Our use Navbar Logo   */}
        <NavLink className='logoDiv' to="/home">Reportage</NavLink>



        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          
          </Nav>

            {/*  Our use nav bar Link   */}
          <Nav>
            <Nav.Link className='navlinks' eventKey={2}>
            <NavLink className='link' to="/home" >Home</NavLink>
            </Nav.Link>
            <Nav.Link className='navlinks' eventKey={2}>
            <NavLink className='link' to="#" >News</NavLink>
            </Nav.Link>
            <Nav.Link className='navlinks' eventKey={2} to="/about">
            <NavLink className='link' to="/about" >About</NavLink>
            </Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavBar;






