import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Images from '../../images/Ellipsebiggreen.png';
import Image from '../../images/shield-tick.png';
import Imagen from '../../images/Vectorss.png';
import Imagens from '../../images/user.png';
import Imagenss from '../../images/layer.png';
import Hand from '../../images/Hand.png';
import Arrow from '../../images/arrow.png';
import Arrows from '../../images/arrow-white.png';
import Step from './Step';





const Innermain = () => {
  return (
    <div className='inner-cont'>
      <div className='text-inner'>
        <h1>Why Choose Us</h1>
      </div>
      <Container id='down'>
      <Row>
        <Col id='colone'>
        <img src={Images} alt="img" className='imgss' />
        <img src={Image} alt="img" className='imgssm' />
        <p className='we'>We create the best and most up to date policies for your business
        </p>
        </Col>
        <Col id='coltwo'>
        <img src={Images} alt="img" className='imgss' />
        <img src={Imagen} alt="img" className='imgssm' />
        <p className='we'>Terma Keeps you updated on new T&C modules available for premium result
        </p>
        </Col>
        <Col id='col'>
        <img src={Images} alt="img" className='imgss' />
        <img src={Imagenss} alt="img" className='imgssm' />
        <p className='we'>Terma lets you edit and customize manually your policies and also lets you download them on PDF, DOCX, TXT and HTML format.
        </p>
        </Col>
        <Col id='colone'>
        <img src={Images} alt="img" className='imgss' />
        <img src={Imagens} alt="img" className='imgssm' />
        <p className='we'>Terma is an Easy to Use System,which gives youaccess to edit,monitor and Enforce your product policyat any given time
        </p>
        </Col>
      </Row>
      </Container>
      <Container>
        <Row id='rowtwo'>
          <Col xl={6} sm={12} md={6}>
          <img src={Hand} alt="pic" className='pic' />
          </Col>
          <Col xs={6} sm={12} md={6}>
          <h4>Why you Need
          </h4>
          <h1>Terms and Conditions
          </h1>
          <div className='bco'>
            <h4 className='have'>Having a good Terms of Service (TOS) is very important for every website or application. Basically, is a legal agreement between a service and aperson that wants to use that service.We will take care to clear all the doubts of your current and upcoming users with our highly professional TOS generator.</h4>
          </div>
          <button className='get'><a href='' id='aa'>Get Started</a></button>
          </Col>
        </Row>
      </Container>
      <Container id='new-cont'>
        <h2 className='how'>How It Works</h2>
        <Row id='conone'>
          <Col id='four' >
            <div className='step'>
            <h4>Step 1</h4>
            <img src={Arrow} alt="img" className='arrow' />
            </div>
            <h5>Enter your website name and the URL to the website. example(www.buymenow.com)</h5>
            
          </Col>
          <Col id='five'>
          <div className='step'>
            <h4>Step 2</h4>
            <img src={Arrow} alt="img" className='arrow' />
            </div>
            <h5>All you need to do is answer a handful of simple questions, and we'll generate the Terms of Service for your website or app. It should take you less than 5 minutes to get it done.</h5>
          </Col>
        </Row>
        <Row id='cotwo'>
        <Col id='four' >
            <div className='step'>
            <h4>Step 3</h4>
            <img src={Arrow} alt="img" className='arrow' />
            </div>
            <h5>Enter your website name and the URL to the website. example(www.buymenow.com)</h5>
            
          </Col>
        <Col id='fourss'>
        <div className='step'>
            <h4>Step 4</h4>
            <img src={Arrows} alt="img" className='arrow' />
            </div>
            <h5>Click on the download button to download your template or copy the link to share your template.</h5>
        </Col>
        </Row>
      </Container>
      
      <Container id='new-cont'>
        <h1 className='feed'>Customer Feedback</h1>
        <Step />
      </Container>
      <Container fluid id='six-cont'>
        <Container className='last'>
        <Row>
          <Col xl={3} sm={12} id='e'>
          <div >
          <h3 className='last-div'>Products</h3>
          <p>WE are a legally verified agency. We create customized Privacy Policies and Terms & Conditions in a matter of seconds to keep your business safe from any legal issue.</p>
          </div>
          </Col>
          <Col xl={3} sm={12} id='f'>
            <div>
            <h3 className='last-div'>Company</h3>
            <a href='' id="aa"><p>About Us</p></a>
            <a href='' id="aa"><p>Our Term Of Use</p></a>
            <a href='' id="aa"><p>Our Privacy Policies</p></a>
            
            </div>
          
          </Col>
          <Col xl={3} sm={12} id='g'>
            <div>
            <h3 className='last-div'>Resources</h3>
            <a href='' id="aa"><p>Terms and Conditions</p></a>
            <a href='' id="aa"><p>Privacy Policies</p></a>
            
            </div>
          
          </Col>
          <Col xl={3} sm={12} id='h'>
            <div>
            <h3 className='last-div'>Support</h3>
            <a href='' id="aa"> <p>Contact Us</p></a>
            <a href='' id="aa"> <p>FAQs</p></a>
           
            </div>
          
          </Col>
        </Row>
        </Container>

      </Container>
      <Container fluid id='cont-footer'>
        <div className='footer-div'>
        <h6 className='footer-text'>All Right Reserved 2022</h6>
        </div>

      </Container>
      
    </div>
  )
}

export default Innermain
