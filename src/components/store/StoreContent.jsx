import React, { Component } from 'react'
import ProductCart from '../common/ProductCart'
import { Row, Col } from 'reactstrap'
import store from '../../reduxStore'

class StoreContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allProducts: []
    }
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {

    })

    this.setProducts()
  }

  setProducts () {
    const allProducts = store.getState().productReducer.productData
    this.setState({
      allProducts
    })
  }

  render () {
    const allProducts = this.state.allProducts.map(p => {
      return (
        <Col md={4} lg={3} xs={6} key={p.id}>
          <div className='product-cart'>
            <ProductCart className='store-product-image' product={p} />
          </div>
        </Col>
      )
    })
    return (
      <div>
        <Row>
          {allProducts}
        </Row>
      </div>
    )
  }
}

export default StoreContent
