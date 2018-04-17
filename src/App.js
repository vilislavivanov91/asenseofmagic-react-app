import React, { Component } from 'react'
import Header from './components/header/Header'
import RandomProducts from './components/random-store/RandomProducts'
import BackgroundImage from './components/background-image/BackgroundImage'

class App extends Component {
  render () {
    return (
      <div >
        <Header />
        <RandomProducts />
        <BackgroundImage />
        Hello World!
      </div>
    )
  }
}

export default App
