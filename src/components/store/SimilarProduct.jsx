import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardText, CardImg, Button } from 'reactstrap'

function SimilarProduct (props) {
  const availabilityElement = props.image.available ? (
    <span className='align-self-center text-success text-center'>В наличност</span>
  ) : (
    <span className='not-available text-light small px-2 py-1'>Изчерпан</span>
  )
  const buttonElement = props.image.available ? (
    <Button color='success' block>Добави</Button>
  ) : (
    <Button color='primary' block>Поръчай</Button>
  )
  return (
    <Card className='text-center similar-product-card'>
      <CardImg src={props.image.src} alt={props.image.alt} />
      <CardBody>
        <CardHeader tag='h5'>
          Име на продукта
        </CardHeader>
        {availabilityElement}
        <CardText className='d-none d-sm-block'>
          {props.image.info}
        </CardText>
        <CardFooter>
          {buttonElement}
        </CardFooter>
      </CardBody>
    </Card>
  )
}

export default SimilarProduct
