import React from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Red from '../../images/red.png';
import Blue from '../../images/blue.png';
import Yellow from '../../images/yellow.png';

const Step = () => {
  const [order, setOrder] = useState([
    {
    id:1,
    image: Red,
    name: 'Chandre moore',
    input:'I felt have really missed alot all this while have not been using Terma,the result span accross all forms of usage and access.',
  },
  {
    id:2,
    image: Red,
    name: 'Emeka Nobis',
    input:'Using Terma terms and conditions template helped me save my business, and it was easy for me to read through',
  },
  {
    id:3,
    image: Yellow,
    name: 'Emmanuel Akpe',
    input:'Terms77 is the real deal.The grammars used were simple and understandable.',
  },
  
])
  return (
    <Row id='conones'>
      {
        order.map((datum) =>
        <Col id='a' xl={3} sm={12} md={3} >
          <div className='hay'>
             <img src={datum.image} alt="img" width={100} className="photo"/>
            <h6 className='name'>{datum.name}</h6>
            <p className='top'>{datum.input}</p>
            </div>
        </Col>
        ) 
      }

    </Row>
  )
}

export default Step
