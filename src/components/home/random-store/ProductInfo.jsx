import React, { Component } from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { addProductInCart, getTotalPriceInCart } from '../../../actions'
import store from '../../../reduxStore'

class ProductInfo extends Component {
  constructor (props) {
    super(props)
    // Bind Handlers
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler (e) {
    e.preventDefault()
    const product = this.props.product

    store.dispatch(addProductInCart(product))
    store.dispatch(getTotalPriceInCart())
  }
  render () {
    return (
      <Card body className='text-center'>
        <CardTitle className='mb-5'>
          {this.props.product.name}
          <CardText>
            Цена: {this.props.product.price} лв.
          </CardText>
        </CardTitle>
        <Button className='' onClick={this.onClickHandler} color='info' size='sm'>Добави в количката</Button>
      </Card>
    )
  }
}

export default withRouter(ProductInfo)
