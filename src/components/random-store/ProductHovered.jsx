import React from 'react'
import FontAwesome from '@fortawesome/react-fontawesome'
import faSearchPlus from '@fortawesome/fontawesome-free-solid/faSearchPlus'
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart'

function ProductHovered (props) {
  return (
    <div className='product-image'>
      <div className='product-icon-wrapper hidden'>
        <a href=''>
          <div className='product-plus-icon icon-wrapper'>
            <FontAwesome className='product-icon' icon={faSearchPlus} />
          </div>
        </a>

        <a href=''>
          <div className='product-cart-icon icon-wrapper'>
            <FontAwesome className='product-icon' icon={faShoppingCart} />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProductHovered