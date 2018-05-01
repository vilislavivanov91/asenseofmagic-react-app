import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import {withRouter} from 'react-router-dom'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import ReviewSection from './ReviewSection'
import productData from '../../data/productData'
import './Product.css'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentProduct: { },
      available: true,
      currentRate: 0,
      isVoted: false
    }

    // Bind handler
    this.ratingCompleted = this.ratingCompleted.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    const id = (this.props.match.params.id)
    const product = productData.getProductById(Number(id))
    console.log(product.name)
    console.log(product.price)

    this.setState({
      currentProduct: product
    })
  }

  ratingCompleted (newValue) {
    if (!this.state.isVoted) {
      this.setState((prevState, props) => {
        const allRates = prevState.currentProduct.allRates + newValue
        const rateCount = prevState.currentProduct.rateCount + 1
        let avarageRate = allRates / rateCount

        if (isNaN(avarageRate)) {
          avarageRate = 0
        }

        let currentProduct = prevState.currentProduct
        currentProduct.rateValue = newValue
        currentProduct.rateCount = rateCount
        currentProduct.avarageRate = avarageRate
        currentProduct.allRates = allRates
        return {
          currentRate: newValue,
          isVoted: true,
          currentProduct
        }
      })
    }
  }

  render () {
    return (
      <div >
        <Container id='top'>
          <Row >
            <Col lg={6} xs={12}>
              <ProductImages img={this.state.currentProduct} />
            </Col>
            <Col lg={6} xs={12}>
              <ProductInfo
                available={this.state.currentProduct.available}
                ratingCompleted={this.ratingCompleted}
                currentRate={this.state.currentRate}
                numberOfStars={5}
                avarageRate={this.state.currentProduct.avarageRate}
                rateCount={this.state.currentProduct.rateCount}
                product={this.state.currentProduct} />
            </Col>
          </Row>
          <hr className='my-5' />
          <SimilarProducts />
          <ReviewSection />
        </Container>
      </div>
    )
  }
}

export default withRouter(Product)
