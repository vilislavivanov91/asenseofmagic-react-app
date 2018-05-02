import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import './ProductImage.css'

class ProductImage extends Component {
  constructor (props) {
    super(props)

    // Bind Handlers
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler (e) {
    e.preventDefault()
    const link = 'product/' + this.props.id
    this.props.history.push(link)
  }

  render () {
    let className = 'img-responsive img-fluid ' + this.props.className
    return (
      <div className='hovereffect'>
        <img className={className} src={this.props.src} alt={this.props.name} />
        <div className='overlay'>
          <h2>{this.props.name}</h2>
          <Button className='info border-light' onClick={this.onClickHandler}>Разгледай</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(ProductImage)
