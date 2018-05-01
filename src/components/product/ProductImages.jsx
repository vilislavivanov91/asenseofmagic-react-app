import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function ProductImages (props) {
  return (
    <div className='product-wrapper'>
      <Col className='my-3 p-0'>
        <img className='img-fluid img-thumbnail' src={props.img.src} alt={props.img.name} />
      </Col>
      <Container>
        <Row className='secondary-images'>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.img.src} alt={props.img.name} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.img.src} alt={props.img.name} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.img.src} alt={props.img.name} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.img.src} alt={props.img.name} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductImages
