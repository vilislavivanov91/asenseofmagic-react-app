import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Header from './components/home/header/Header'
import RandomProducts from './components/home/random-store/RandomProducts'
import BackgroundImage from './components/home/background-image/BackgroundImage'
import About from './components/home/about/About'
import Contact from './components/home/contact/Contact'
import Store from './components/store/Store'
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
        </Container>
        <Store />
        <Footer />
      </div>
    )
  }
}

export default App
