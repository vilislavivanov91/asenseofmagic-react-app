import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { IoAndroidClose } from 'react-icons/lib/io'

const CartProduct = (props) => {
  return (
    <Row>
      <Col className='m-auto' xs={4}>
        <img src={this.props.src} alt={this.props.name} />
      </Col>
      <Col className='m-auto'>
        <div className='d-flex flex-column justify-items-center align-items-start'>
          <h6 className='text-info'>{this.props.name}</h6>
          <p>{this.props.price}</p>
        </div>
      </Col>
      <Col className='my-auto mr-3' xs={{ size: 1 }}>
        <Button color='danger' size='sm'>
          <IoAndroidClose />
        </Button>
      </Col>
    </Row>
  )
}

export default CartProduct
