import React, { Component } from 'react'
import './RandomProducts.css'
import Product from './Product'
import ProductInfo from './ProductInfo'
import { Row, Col } from 'reactstrap'
import productData from '../../../data/productData'

class RandomProducts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }
  componentDidMount () {
    const products = productData.getRandomProducts(4)
    console.log(products)

    this.setState({
      products
    })
  }
  render () {
    const productsElement = this.state.products.map(p => {
      return (
        <Col sm={6} key={p.id} className='my-4'>
          <Product src={p.src} name={p.name} id={p.id} />
          <ProductInfo product={p} />
        </Col>
      )
    })
    return (
      <div>
        <h1 className='random-store-header my-3 py-3'>Shop Now</h1>
        <Row>
          {productsElement}
        </Row>
      </div>
    )
  }
}

export default RandomProducts
