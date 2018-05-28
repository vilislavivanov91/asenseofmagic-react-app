import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'
import { IoAndroidClose } from 'react-icons/lib/io'
import store from '../../reduxStore'
import { remove, getTotalPrice } from '../../actions/cartAction'

class CartProduct extends Component {
  constructor (props) {
    super(props)

    // Bind Handlers
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    store.dispatch(remove(this.props.product))
    store.dispatch(getTotalPrice())
  }

  render () {
    const product = this.props.product
    const productLink = `/product/${product.id}`
    return (
      <Row>
        <Col className='m-auto' xs={4}>
          <img className='img-fluid cart-img' src={product.src} alt={product.name} />
        </Col>
        <Col className='m-auto'>
          <div className='d-flex flex-column justify-items-center align-items-start'>
            <Link to={productLink} className='text-info'>{product.name}</Link>
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
