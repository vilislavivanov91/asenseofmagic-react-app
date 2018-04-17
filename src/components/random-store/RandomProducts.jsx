import React from 'react'
import './RandomProducts.css'
import Product from './Product'
import ProductInfo from './ProductInfo'
import photo from './galina-n-200668-unsplash.jpg'

let image = {
  name: 'testName',
  src: photo
}

function RandomProducts (props) {
  return (
    <div className='container-product'>
      <h1>Shop Now</h1>
      <div className='random-products'>
        <div>
          <Product image={image} />
          <ProductInfo name='First Product' price={100} />
        </div>
        <div>
          <Product image={image} />
          <ProductInfo name='Second Product' price={13} />
        </div>
        <div>
          <Product image={image} />
          <ProductInfo name='Third Product' price={40} />
        </div>
        <div>
          <Product image={image} />
          <ProductInfo name='Fourth Product' price={150} />
        </div>
      </div>
    </div>
  )
}

export default RandomProducts
