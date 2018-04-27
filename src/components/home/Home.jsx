import React from 'react'
import Header from './header/Header'
import RandomProducts from './random-store/RandomProducts'
import BackgroundImage from './background-image/BackgroundImage'
import About from './about/About'
import Contact from './contact/Contact'
import { Container } from 'reactstrap'

function Home () {
  return (
    <div>
      <Header />
      <Container>
        <RandomProducts />
      </Container>
      <BackgroundImage />
      <Container>
        <About />
        <Contact />
      </Container>
    </div>
  )
}

export default Home
