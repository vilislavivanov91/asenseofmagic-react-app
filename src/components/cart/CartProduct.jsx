import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { IoAndroidClose } from 'react-icons/lib/io'
import store from '../../reduxStore'
import { removeProductFromCart, getTotalPriceInCart } from '../../actions'

class CartProduct extends Component {
  constructor (props) {
    super(props)

    // Bind Handlers
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    store.dispatch(removeProductFromCart(this.props.product))
    store.dispatch(getTotalPriceInCart())
  }

  render () {
    const product = this.props.product
    return (
      <Row>
        <Col className='m-auto' xs={4}>
          <img className='img-fluid cart-img' src={product.src} alt={product.name} />
        </Col>
        <Col className='m-auto'>
          <div className='d-flex flex-column justify-items-center align-items-start'>
            <h6 className='text-info'>{product.name}</h6>
            <p>{product.price}</p>
          </div>
        </Col>
        <Col className='my-auto mr-3' xs={{ size: 1 }}>
          <Button color='danger' size='sm'>
            <IoAndroidClose onClick={this.handleButtonClick} />
          </Button>
        </Col>
      </Row>
    )
  }
}

export default CartProduct
