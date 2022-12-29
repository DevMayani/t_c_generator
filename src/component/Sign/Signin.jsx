import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Images from '../../images/logoimgone.png';
import Gog from '../../images/gogg.png';
import { Link } from "react-router-dom";
import Signi from '../../images/sign.png';
import Capaig from '../../images/capaig.png';
import Capaf from '../../images/Capaf.png';
import Capatw from '../../images/Capatw.png';
import Capain from '../../images/capain.png';


const Signin = () => {
  return (
    <Container fluid id='maint-conts'>
      <Row>
      <Col xl={6} sm={12} id='new-oness'>
      <div>
      <img src={Images} width={300}></img>
      </div>
      <div>
      <img src={Signi} width={500}></img>
      </div>
      </Col>
      <Col  xl={6} sm={12} id='new-twos'>
        <Container>
     
      <h1 className='creat'>Log in</h1>
      <div className='main-sig'>
          <div className='sig'>
            <h6>Sign up with google</h6>
            <img src={Gog} width={15} ></img>
          </div>
        </div>
        <div className='line'>
            <hr />
            <a href='' className='link'>or log in up with your email</a>
            <hr />
          </div>
          <div className='first'>
            <h5>Username:</h5>
            <input type='text' placeholder='Enter username' className='inp'/>
          </div>
          <div className='first'>
            <h5>Email address:</h5>
            <input type='email' placeholder='Enter email address' className='inp'/>
          </div>
          <div className='first'>
            <h5>Password:</h5>
            <input type='password' placeholder='Enter password' className='inp'/>
          </div>
          <div className='first'>
            <p className='pur'>Forgot Password?</p>
          </div>
          <div className='firsty'>
          <button className='buton'>Log In</button>
           
          </div>
          <div className='firsts'>
            <h6>Dont have an account?</h6>
            <Link to='/signup' className='lnks'><h6 className='colo'>Sign up</h6></Link>
          </div>
          <div className='lines'>
            <hr />
            <a href='' className='links'>or sign in with</a>
            <hr />
          </div>
          <div className='firstsh'>
            <img src={Capaf} width={10}></img>
            <img src={Capaig} width={10}></img>
            <img src={Capatw} width={10}></img>
            <img src={Capain} width={10}></img>
            
          </div>
          </Container>
      </Col>
      </Row>
    </Container>
  )
}

export default Signin
