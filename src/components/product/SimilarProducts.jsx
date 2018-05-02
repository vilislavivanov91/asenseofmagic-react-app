import React, { Component } from 'react'
import SimilarProduct from './SimilarProduct'
import { Row, Col } from 'reactstrap'
import productData from '../../data/productData'

class SimilarProducts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      similarProducts: []
    }
  }

  componentDidMount () {
    const similarProducts = productData.getRandomProducts(8)
    this.setState({
      similarProducts
    })
  }

  render () {
    const similarProductsElement = this.state.similarProducts.map(i => {
      return (
        <Col key={i.id} md={3} xs={6}>
          <div className='mb-4'>
            <SimilarProduct image={i} />
          </div>
        </Col>
      )
    })
    return (
      <div>
        <h4 className='ml-3 mb-4 text-info'>Similar Products</h4>
        <Row>
          {similarProductsElement}
        </Row>
      </div>
    )
  }
}

export default SimilarProducts
