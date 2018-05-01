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
    const link = 'product/' + this.props.id
    return (
      <div>
        <div className='hovereffect'>
          <img className='img-responsive img-fluid' src={this.props.src} alt={this.props.name} />
          <div className='overlay'>
            <h2>{this.props.name}</h2>
            <a className='info' href={link}>link here</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
