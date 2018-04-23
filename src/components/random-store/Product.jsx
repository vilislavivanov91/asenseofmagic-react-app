import React, { Component } from 'react'
import './Product.css'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }
    // Bind Handlers
  }

  render () {
    return (
      <div>
        <div className='hovereffect'>
          <img className='img-responsive img-fluid' src={this.props.image.src} alt={this.props.image.name} />
          <div className='overlay'>
            <h2>{this.props.title}</h2>
            <a className='info' href='#'>link here</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
