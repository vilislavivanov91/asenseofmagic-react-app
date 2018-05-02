import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CartProducts from './CartProducts'
import './Cart.css'

const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'

class Cart extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Container>
        <div className='cart-wrapper'>
          <Row >
            <Col className='cart-col' sm={8}>
              <CartProducts name='First Product' price={49.99} src={img} className='my-5' />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Cart
