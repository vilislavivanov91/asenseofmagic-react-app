import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardText, Button } from 'reactstrap'
import ProductImage from '../common/ProductImage'
import './SimilarProduct.css'

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
      <ProductImage
        className='similar-product-image'
        name={props.image.name}
        id={props.image.id}
        src={props.image.src}
        height={100} />
      <CardBody>
        <CardHeader tag='h5'>
          {props.image.name}
        </CardHeader>
        {availabilityElement}
        <CardText className='d-none d-sm-block'>
          {props.image.price}лв.
        </CardText>
        <CardFooter>
          {buttonElement}
        </CardFooter>
      </CardBody>
    </Card>
  )
}

export default SimilarProduct
