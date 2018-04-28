import React, { Component } from 'react'
import Header from './header/Header'
import RandomProducts from './random-store/RandomProducts'
import BackgroundImage from './background-image/BackgroundImage'
import About from './about/About'
import Contact from './contact/Contact'
import { Container, Button } from 'reactstrap'

class Home extends Component {
  constructor (props) {
    super(props)

    // Bind handlers
    this.handleButtonClicked = this.handleButtonClicked.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleButtonClicked () {
    window.scrollTo(0, 0)
  }

  render () {
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
        <Button className='position-absolute' onClick={this.handleButtonClicked} color='danger' size='sm'>Top</Button>
      </div>
    )
  }
}

export default Home
