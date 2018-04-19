import React, { Component } from 'react'
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'

class NavigationSecondary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      totalCharge: 0,
      hoveredCart: false
    }

    // Bind Handlers
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
  }

  onMouseEnterHandler (e) {
    this.setState({
      hoveredCart: true
    })
  }

  onMouseLeaveHandler (e) {
    this.setState({
      hoveredCart: false
    })
  }

  render () {
    const dropDownQueuedItems = (
      <div className='drop-down-products'>
        <div className='item-in-cart'>
          <h1>First product</h1>
          <p>Some paragraph</p>
          <p>price 1</p>
        </div>

        <div className='item-in-cart'>
          <h1>Second product</h1>
          <p>Some paragraph2</p>
          <p>price 2</p>
        </div>

        <div className='item-in-cart'>
          <h1>third product</h1>
          <p>Some paragraph3</p>
          <p>price 22</p>
        </div>
      </div>
    )

    return (
      <div className='navigation-secondary'>
        <a href='#' onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
          <div className='cart'>
            <div className='cart-total'>
              <h3>Total</h3>
              <p>{this.state.totalCharge} лв</p>
            </div>
            <FaShoppingCart />
          </div>
          { this.state.hoveredCart ? dropDownQueuedItems : null }
        </a>
      </div>
    )
  }
}

export default NavigationSecondary
