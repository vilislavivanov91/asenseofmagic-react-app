import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Product.css'

class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }
    // Bind Handlers
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler (e) {
    e.preventDefault()
    const link = 'product/' + this.props.id
    this.props.history.push(link)
  }

  render () {
    return (
      <div>
        <div className='hovereffect'>
          <img className='img-responsive img-fluid random-img' src={this.props.src} alt={this.props.name} />
          <div className='overlay'>
            <h2>{this.props.name}</h2>
            <Button className='info border-light' onClick={this.onClickHandler}>Разгледай</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Product)
