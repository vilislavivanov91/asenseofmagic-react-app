import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import Routes from './Routes'
class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
