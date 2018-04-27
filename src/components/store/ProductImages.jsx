import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function ProductImages (props) {
  return (
    <div className=''>
      <Col className='my-3 p-0'>
        <img className='img-fluid img-thumbnail' src={props.mainImage.src} alt={props.mainImage.alt} />
      </Col>
      <Container>
        <Row className='secondary-images'>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.mainImage.src} alt={props.mainImage.alt} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.mainImage.src} alt={props.mainImage.alt} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.mainImage.src} alt={props.mainImage.alt} />
          </Col>
          <Col className='mb-1' sm={3} xs={6}>
            <img className='img-fluid' src={props.mainImage.src} alt={props.mainImage.alt} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductImages
