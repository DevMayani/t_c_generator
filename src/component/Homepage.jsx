import React from 'react'
import Home from './Home/Index'
import Main from './Home/Main'
import Innermain from './Home/Innermain'

const Homepage = () => {
  return (
    <div>
      <Home />
      <Main />
      <div id='und'></div>
      <Innermain />
    </div>
  )
}

export default Homepage
