import React, { Component } from 'react'
import ProductHovered from './ProductHovered'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }
    // Bind Handlers
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
  }

  onMouseLeaveHandler () {
    this.setState({
      hovered: false
    })
  }

  onMouseEnterHandler () {
    this.setState({
      hovered: true
    })
  }

  render () {
    const hoveredProduct = <ProductHovered />

    return (
      <div className='product' onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        <img src={this.props.image.src} alt={this.props.image.name} />
        { this.state.hovered ? hoveredProduct : null }
      </div>
    )
  }
}

export default Product
