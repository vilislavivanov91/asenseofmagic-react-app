import React from 'react'

function ProductInfo (props) {
  return (
    <div className='product-info-wrapper'>
      <div className='product-info'>
        <h3>
          <a href=''>
            {props.name}
          </a>
        </h3>
        <p>{props.price} лв.</p>
      </div>
      <button>Read More</button>
    </div>
  )
}

export default ProductInfo
