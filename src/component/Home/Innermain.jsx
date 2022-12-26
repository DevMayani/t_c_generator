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
          <Col xs={6} sm={12} md={6}>
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
            <h4>Step 1</h4>
            <img src={Arrow} alt="img" className='arrow' />
            </div>
            <h5>All you need to do is answer a handful of simple questions, and we'll generate the Terms of Service for your website or app. It should take you less than 5 minutes to get it done.</h5>
          </Col>
        </Row>
        <Row id='cotwo'>
        <Col id='fours'>
        <div className='step'>
            <h4>Step 1</h4>
            <img src={Arrow} alt="img" className='arrow' />
            </div>
            <h5>Go through the generated template that has been created for you or use the audio option for easy access. </h5>
            
        </Col>
        <Col id='fourss'>
        <div className='step'>
            <h4>Step 1</h4>
            <img src={Arrows} alt="img" className='arrow' />
            </div>
            <h5>Click on the download button to download your template or copy the link to share your template.</h5>
        </Col>
        </Row>
      </Container>
      <Container id='third-cont'>
        <h2 className='feed'>Customer Feedback</h2>
        <Row className='foutrow'>
          <Col id='a'>a</Col>
          <Col id='b'>b</Col>
          <Col id='c'>c</Col>
        </Row>
      </Container>
      <Container>

      </Container>
      
    </div>
  )
}

export default Innermain
