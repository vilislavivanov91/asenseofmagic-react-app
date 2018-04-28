import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import ReviewSection from './ReviewSection'
import img from './galina-n-200668-unsplash.jpg'
import './Store.css'

const mainImage = {
  src: img, alt: 'imageName'
}

class Store extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <Container id='top' style={{marginTop: '150px'}}>
        <Row>
          <Col lg={6} xs={12}>
            <ProductImages mainImage={mainImage} />
          </Col>
          <Col lg={6} xs={12}>
            <ProductInfo />
          </Col>
        </Row>
        <hr className='my-5' />
        <SimilarProducts />
        <ReviewSection />
      </Container>
    )
  }
}

export default Store
