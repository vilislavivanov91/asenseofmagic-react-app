import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import { Row } from 'reactstrap'

class RatingStar extends Component {
  render () {
    return (
      <Row className='px-2 my-2 text-center'>
        <p className='align-self-end mx-5'>Оценка: </p>
        <StarRatings
          rating={this.props.currentRate}
          starRatedColor='blue'
          changeRating={this.props.ratingCompleted}
          numberOfStars={this.props.numberOfStars} />
      </Row>
    )
  }
}

export default RatingStar
