import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import { Row } from 'reactstrap'
import store from '../../reduxStore'

class RatingStar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      avarageRate: 0
    }
  }

  componentDidMount () {
    this.setCurrentRate()
    this.unsubscribe = store.subscribe(() => {
      this.setCurrentRate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  setCurrentRate () {
    const id = Number(this.props.id)
    const currentState = store.getState().productReducer.productData
    const product = currentState.find(p => {
      return p.id === id
    })
    const avarageRate = product.avarageRate
    this.setState({
      avarageRate
    })
  }

  render () {
    return (
      <Row className='px-2 my-2 text-center'>
        <p className='align-self-end mx-5'>Оценка: </p>
        <StarRatings
          rating={this.state.avarageRate}
          starRatedColor='blue'
          changeRating={this.props.ratingCompleted}
          numberOfStars={this.props.numberOfStars} />
      </Row>
    )
  }
}

export default RatingStar
