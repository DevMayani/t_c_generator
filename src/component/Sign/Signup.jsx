import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Images from '../../images/logoimgone.png';
import Gog from '../../images/gogg.png';

const Signup = () => {
  return (
   <Container fluid id='maint-cont'>
    <Row >
      <Col id='new-ones'>
      <div>
      <img src={Images} width={300}></img>
      </div>
      <div className='wel'>
        <h1 className='wl-text'>WELCOME</h1>
        <h4 className='hhh'>We are a legally verified agency that create customized privacy policies and terms and condition a matter of seconds to keep your business safe from any legal Issues.</h4>
        <p className='ggg'>Having a good Terms of Service (TOS) is very important for every website or application. Basically, is a legal agreement between a service and a person that wants to use that service. We will take care to clear all the doubts of your current and upcoming users with our highly professional TOS generator.</p>
      </div>
      </Col>
      <Col id='new-two'>
     
      <h2 className='creat'>Create account</h2>
      <div className='main-sig'>
          <div className='sig'>
            <h6>Sign up with google</h6>
            <img src={Gog} width={15} ></img>
          </div>
        </div>
        <div className='line'>
            <hr />
            <a href='' className='link'>or sign up with your email</a>
            <hr />
          </div>
          <div >
            <h5>First name:</h5>
            <input type='text' placeholder='Enter first name' className='inp'/>
          </div>
          <div className='first'>
            <h5>Last name:</h5>
            <input type='text' placeholder='Enter last name' className='inp'/>
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
            <h5>Confirm password:</h5>
            <input type='password' placeholder='Enter confirm password' className='inp'/>
          </div>
          <div className='first'>
            <p className='pur'>By registering,you agree to our <span className='colo'>Terms</span>,<a href='' className='check'>Check box</a></p>
          </div>
          <div className='first'>
            <input type='submit' placeholder='Sign Up' className='inp'/>
          </div>
          <div className='firsts'>
            <h6>Already have an account</h6>
            <h6 className='colo'>Sign in</h6>
          </div>
      </Col>
    </Row>
   </Container>
  )
}

export default Signup
