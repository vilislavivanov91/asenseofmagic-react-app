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

  sortProducts (sortBy) {
    const sortProducts = this.state.allProducts
    if (sortBy === 'alphabetically') {
      return sortProducts.sort((a, b) => {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
      })
    } else if (sortBy === 'newestFirst') {
      return sortProducts.sort((a, b) => {
        return (a.dateCreated < b.dateCreated) ? -1 : (a.dateCreated > b.dateCreated) ? 1 : 0
      })
    } else if (sortBy === 'lowestPriceFirst') {
      return sortProducts.sort((a, b) => {
        return (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0
      })
    } else if (sortBy === 'highestPriceFirst') {
      return sortProducts.sort((a, b) => {
        return (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0
      })
    } else {
      return sortProducts
    }
  }

  render () {
    const sortBy = this.props.sortBy
    const sortedProducts = this.sortProducts(sortBy)
    const allProductsElement = sortedProducts.map(p => {
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
          {allProductsElement}
        </Row>
      </div>
    )
  }
}

export default StoreContent
