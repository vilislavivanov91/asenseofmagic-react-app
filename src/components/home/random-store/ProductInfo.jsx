import React, { Component } from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class ProductInfo extends Component {
  constructor (props) {
    super(props)
    // Bind Handlers
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler (e) {
    this.props.history.push(`/product/${this.props.id}`)
  }
  render () {
    return (
      <Card body className='text-center position-relative d-flex flex-column'>
        <CardTitle className='mb-5'>
          {this.props.name}
          <CardText>
            Цена: {this.props.price} лв.
          </CardText>
        </CardTitle>
        <Button className='card-button' onClick={this.onClickHandler} block outline color='info' size='sm'>Read More</Button>
      </Card>
    )
  }
}

export default withRouter(ProductInfo)
