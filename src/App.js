import React, { Component } from 'react'
import Header from './components/header/Header'
import RandomProducts from './components/random-store/RandomProducts'
import BackgroundImage from './components/background-image/BackgroundImage'
import About from './components/about/About'

class App extends Component {
  render () {
    return (
      <div >
        <Header />
        <RandomProducts />
        <BackgroundImage />
        <About />
        Hello World!
      </div>
    )
  }
}

export default App
