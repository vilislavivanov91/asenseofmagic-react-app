import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import RandomProducts from './components/random-store/RandomProducts'
import BackgroundImage from './components/background-image/BackgroundImage'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Container } from 'reactstrap'

class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <Header />
        <Container>
          <RandomProducts />
        </Container>
        <BackgroundImage />
        <Container>
          <About />
          <Contact />
        Hello World!
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App
