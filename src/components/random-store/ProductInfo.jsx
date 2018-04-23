import React from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'

function ProductInfo (props) {
  return (
    <Card body className='text-center'>
      <CardTitle>
        {props.name}
        <CardText>
          Цена: {props.price} лв.
        </CardText>
      </CardTitle>
      <Button outline color='info' size='sm'>Read More</Button>
    </Card>
  )
}

export default ProductInfo
