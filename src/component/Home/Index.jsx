import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Images from '../../images/logoimgone.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar  expand="lg" id='main' >
      <Container id='hmm' >
        <div className='Navbar.Brand' id='imag'>
          <img src={Images} alt="img" width={200} />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='bar'>
            <Nav.Link href="#features"><h5>About Us</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Template</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Contact Us</h5></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to='/signin' className='lnk'><h5>Log in</h5></Link></Nav.Link>
            <Nav.Link><Link to='/signup' className='lnk'><button className='sign'>Sign Up</button></Link></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Home

