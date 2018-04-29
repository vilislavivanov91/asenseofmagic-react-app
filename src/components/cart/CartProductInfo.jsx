import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { IoAndroidClose } from 'react-icons/lib/io'

const CartProductInfo = (props) => {
  return (
    <div>
      <Row>
        <Col className='m-auto' xs={4}>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg' alt='item1' />
        </Col>
        <Col className='m-auto'>
          <div className='d-flex flex-column justify-items-center align-items-start'>
            <h6 className='text-info'>Name of product</h6>
            <p>$49.00</p>
          </div>
        </Col>
        <Col className='my-auto mr-3' xs={{ size: 1 }}>
          <Button color='danger' size='sm'>
            <IoAndroidClose />
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  )
}

export default CartProductInfo
