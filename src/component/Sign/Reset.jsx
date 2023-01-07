import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Images from '../../images/logoimgone.png';
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <Container fluid id='maint-contst'>
      <Row>
      <Col xl={4} sm={12} id='new-onest'>
      <div>
      <img src={Images} width={300}></img>
      </div>
      
      </Col>
      <Col  xl={8} sm={12} id='new-twost'>
        <Container>
     
      <h1 className='creat'>Log in</h1>
          <div className='first'>
            <input type='text' placeholder='Reset your Password' className='inp'/>
          </div>
          <div className='first'>
            <h5>Email address:</h5>
            <input type='email' placeholder='Enter email address' className='inp'/>
          </div>
          <div className='firsty'>
          <button className='buton'>Send Password Reset Link</button> 
          </div>
          </Container>
      </Col>
      </Row>
    </Container>
    
    
  )
}

export default Reset
