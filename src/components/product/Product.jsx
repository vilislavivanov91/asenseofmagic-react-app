import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import {withRouter} from 'react-router-dom'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import ReviewSection from './ReviewSection'
import productData from '../../data/productData'
import store from '../../reduxStore'
import { updateProduct } from '../../actions/productsAction'
import './Product.css'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentProduct: {},
      isVoted: false
    }

    // Bind handler
    this.ratingCompleted = this.ratingCompleted.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    // Use redux to add the current product and data

    this.setCurrentProduct()

    this.unsubscribe = store.subscribe(() => {
      this.setCurrentProduct()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  ratingCompleted (newValue) {
    if (!this.state.isVoted) {
      const allRates = this.state.currentProduct.allRates + newValue
      const rateCount = this.state.currentProduct.rateCount + 1
      let avarageRate = allRates / rateCount

      if (isNaN(avarageRate)) {
        avarageRate = 0
      }
      // Add logic for adding currentRate to redux state

      let currentProduct = this.state.currentProduct
      currentProduct.rateValue = newValue
      currentProduct.rateCount = rateCount
      currentProduct.avarageRate = avarageRate
      currentProduct.allRates = allRates
      store.dispatch(updateProduct(currentProduct.id, currentProduct))
      this.setState({
        isVoted: true
      })
    }
  }

  setCurrentProduct () {
    const product = productData.getProductById(Number(this.props.match.params.id))
    this.setState({
      currentProduct: product
    })
  }

  render () {
    return (
      <div >
        <Container id='top'>
          <Row >
            <div className='product-wrapper'>
              <Col lg={6} xs={12}>
                <ProductImages img={this.state.currentProduct} />
              </Col>
              <Col lg={6} xs={12}>
                <ProductInfo
                  id={this.props.match.params.id}
                  available={this.state.currentProduct.available}
                  ratingCompleted={this.ratingCompleted}
                  currentRate={this.state.currentProduct.rateValue}
                  numberOfStars={5}
                  avarageRate={this.state.currentProduct.avarageRate}
                  rateCount={this.state.currentProduct.rateCount}
                  product={this.state.currentProduct} />
              </Col>
            </div>
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
