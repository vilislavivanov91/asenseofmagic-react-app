import React from 'react'
import './RandomProducts.css'
import Product from './Product'
import ProductInfo from './ProductInfo'
import { Row, Col } from 'reactstrap'
import productData from '../../../data/productData'

const products = [
  productData.getProductById(Math.floor(Math.random() * 18) + 1),
  productData.getProductById(Math.floor(Math.random() * 18) + 1),
  productData.getProductById(Math.floor(Math.random() * 18) + 1),
  productData.getProductById(Math.floor(Math.random() * 18) + 1)
]

function RandomProducts ({match}) {
  const productsElement = products.map(p => {
    return (
      <Col sm={6} key={p.id} className='my-4 d-flex flex-column flex-shrink-1'>
        <Product src={p.src} name={p.name} id={p.id} />
        <ProductInfo name={p.name} price={p.price} id={p.id} />
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

export default RandomProducts
