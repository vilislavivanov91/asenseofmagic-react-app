import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CartProducts from './CartProducts'
import './Cart.css'
import store from '../../reduxStore'

class Cart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    this.unsubscribe = store.subscribe(() => {
      let currentState = store.getState()
      this.setState({
        products: currentState.products
      })
    })

    let currentState = store.getState()
    this.setState({
      products: currentState.products
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <Container>
        <div className='cart-wrapper'>
          <Row >
            <Col className='cart-col' sm={8}>
              <CartProducts products={this.state.products} className='my-5' />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Cart
