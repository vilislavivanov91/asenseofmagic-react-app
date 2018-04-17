import React from 'react'
import './RandomProducts.css'
import Product from './Product'
import ProductInfo from './ProductInfo'
import photo from './galina-n-200668-unsplash.jpg'

let image = {
  name: 'testName',
  src: photo
}

const products = [
  { name: 'First Product', price: 100, image: image },
  { name: 'Second Product', price: 13, image: image },
  { name: 'Third Product', price: 40, image: image },
  { name: 'Fourth Product', price: 150, image: image }
]

function RandomProducts (props) {
  const productsElement = products.map(p => {
    return (
      <div>
        <Product image={p.image} />
        <ProductInfo name={p.name} price={p.price} />
      </div>
    )
  })

  return (
    <div className='container-product'>
      <h1>Shop Now</h1>
      <div className='random-products'>
        {productsElement}
      </div>
    </div>
  )
}

export default RandomProducts
