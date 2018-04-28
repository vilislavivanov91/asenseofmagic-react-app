import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaFacebook from 'react-icons/lib/fa/facebook'
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

function AboutImage (props) {
  return (
    <Col md={3} sm={6} xs={12}>
      <div className='align-items-center' >
        <Card className='text-center'>
          <CardImg className='img-fluid img-thumbnail mb-3' src={props.image.src} alt={props.image.name} />
          <CardBody>
            <CardTitle>Some Title</CardTitle>
            <CardText>Some text inside card body</CardText>
            <Row className='justify-content-around'>
              <a className='h3 text-warning' href='#contact'>
                <FaEnvelope />
              </a>
              <a className='h3 text-primary' href='https://www.facebook.com/profile.php?id=100008222798165'>
                <FaFacebook />
              </a>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}

export default AboutImage
