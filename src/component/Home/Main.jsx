import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from '../../images/pagenew.png';

const Main = () => {
  return (
    <div>
    <Container id='main-head'>
      <Row id='row'>
        <Col xs={6} sm={12} md={6} id="one">
          <div className='hld'>
          <h1>Valid Solution for</h1>
          <h1>Your Product T&Cs</h1>
          </div>
          <div className='ppp'>
          <p>We offer valid Terms and Condition Templates For small scale 
             businesses, Large scale businesses, Products and services, 
             Capturing your business legal terms of service at a glance.
          </p>
          </div>
        </Col>
        <Col xs={6} sm={12} md={6} id="two">
        <img src={Images} alt="img" className='imgs' />
        </Col>
      </Row>
    </Container>
    <Container fluid>
      </Container>
    </div>
    
    
  )
}

export default Main
