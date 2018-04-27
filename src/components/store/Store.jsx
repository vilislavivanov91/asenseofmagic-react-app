import React from 'react'
import { Row, Col } from 'reactstrap'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import ReviewSection from './ReviewSection'
import img from './galina-n-200668-unsplash.jpg'
import './Store.css'

const mainImage = {
  src: img, alt: 'imageName'
}

function Store (props) {
  return (
    <div>
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
    </div>
  )
}

export default Store
