import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { IoIosCart } from 'react-icons/lib/io'
import RatingStar from './RatingStar'
import SharingButtons from './SharingButtons'

class ProductInfo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      price: 0,
      available: true,
      currentRate: 0,
      rateResult: 0,
      countRate: 0,
      isVoted: false,
      avarageRate: 0
    }

    // Bind handlers
    this.ratingCompleted = this.ratingCompleted.bind(this)
  }

  ratingCompleted (newValue) {
    if (!this.state.isVoted) {
      this.setState((prevState, props) => {
        const rateResult = prevState.rateResult + newValue
        const countRate = prevState.countRate + 1
        let avarageRate = rateResult / countRate

        if (isNaN(avarageRate)) {
          avarageRate = 0
        }
        return {
          currentRate: newValue,
          rateResult,
          isVoted: true,
          countRate,
          avarageRate
        }
      })
    }
  }

  computeRateResult () {
    let avarageRate = this.state.rateResult / this.state.countRate
    if (isNaN(avarageRate)) {
      avarageRate = 0
    }
    this.setState({
      avarageRate
    })
  }

  render () {
    const GRADE = (this.state.countRate === 1) ? ('оценка ') : ('оценки')
    return (
      <div className='product-wrapper'>
        <h3 className='text-center'>Име на продукта</h3>
        <div className='text-center'>
          <p className='d-inline-block mr-3'>Цена:</p>
          <p className='d-inline-block'>{this.state.price} лв.</p>
        </div>
        <p className='text-center mb-0'>Някаква информация за продукта</p>
        <br />
        {this.state.available ? <p className='text-success text-center'>Наличен</p>
          : <p className='text-danger text-center'>Не е наличен</p>}
        <RatingStar
          ratingCompleted={this.ratingCompleted}
          currentRate={this.state.currentRate}
          numberOfStars={5} />
        <p className='text-center'>{this.state.avarageRate} звезди / {this.state.countRate} {GRADE}</p>
        <Button color='primary' block>
          <IoIosCart className='h2 pt-0' />
          <p className='d-inline ml-2'>
            Добави
          </p>
        </Button>
        <SharingButtons />
      </div>
    )
  }
}

export default ProductInfo
