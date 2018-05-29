import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardText, Button } from 'reactstrap'
import ProductImage from './ProductImage'
import store from '../../reduxStore'
import { add, getTotalPrice } from '../../actions/cartAction'

class ProductCart extends Component {
  constructor (props) {
    super(props)

    // Bind handlers
    this.handleButtonAddProduct = this.handleButtonAddProduct.bind(this)
  }

  handleButtonAddProduct (e) {
    store.dispatch(add(this.props.product))
    store.dispatch(getTotalPrice())
  }
  render () {
    const buttonElement = this.props.product.available ? (
      <Button onClick={this.handleButtonAddProduct} color='success' block>Добави</Button>
    ) : (
      <Button color='primary' block>Поръчай</Button>
    )
    return (
      <Card className='text-center similar-product-card'>
        <ProductImage
          className={this.props.className}
          name={this.props.product.name}
          id={this.props.product.id}
          src={this.props.product.src}
          height={100} />
        <CardBody className='p-0'>
          <CardHeader tag='h6'>
            {this.props.product.name}
          </CardHeader>
          <CardText className='d-none h6 d-sm-block'>
            {this.props.product.price}лв.
          </CardText>
          <CardFooter>
            {buttonElement}
          </CardFooter>
        </CardBody>
      </Card>
    )
  }
}

export default ProductCart
