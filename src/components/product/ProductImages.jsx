import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function ProductImages (props) {
  let mainImage = props.img
  let imageArr = [props.img, props.img, props.img, props.img]

  const imageElement = imageArr.map((img, i) => {
    return (
      <Col key={i} className='mb-1' sm={3} xs={6}>
        <img className='img-fluid' src={img.src} alt={img.name} />
      </Col>
    )
  })
  return (
    <div className='product-wrapper'>
      <Col className='my-3 p-0'>
        <img className='img-fluid img-thumbnail' src={mainImage.src} alt={mainImage.name} />
      </Col>
      <Container>
        <Row className='secondary-images'>
          {imageElement}
        </Row>
      </Container>
    </div>
  )
}

export default ProductImages
