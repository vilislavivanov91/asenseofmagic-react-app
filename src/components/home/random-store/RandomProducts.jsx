import React from 'react'
import './RandomProducts.css'
import Product from './Product'
import ProductInfo from './ProductInfo'
import photo from './galina-n-200668-unsplash.jpg'
import { Row, Col } from 'reactstrap'

let image = {
  name: 'testName',
  src: photo
}

const products = [
  { name: 'First Product', price: 100, image: image, id: 1 },
  { name: 'Second Product', price: 13, image: image, id: 2 },
  { name: 'Third Product', price: 40, image: image, id: 3 },
  { name: 'Fourth Product', price: 150, image: image, id: 4 }
]

function RandomProducts (props) {
  const productsElement = products.map(p => {
    return (
      <Col sm={6} key={p.id} className='my-4'>
        <Product image={p.image} title={p.name} />
        <ProductInfo name={p.name} price={p.price} />
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
