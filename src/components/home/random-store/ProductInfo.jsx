import React, { Component } from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { add, getTotalPrice } from '../../../actions/cartAction'
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

    store.dispatch(add(product))
    store.dispatch(getTotalPrice())
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
