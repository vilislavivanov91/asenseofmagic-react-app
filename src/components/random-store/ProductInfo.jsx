import React from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'

function ProductInfo (props) {
  return (
    <Card body className='text-center'>
      <CardTitle>
        <h3>
          {props.name}
        </h3>
        <CardText>
          <p>Цена: {props.price} лв.</p>
        </CardText>
      </CardTitle>
      <Button outline color='info' size='sm'>Read More</Button>
    </Card>
  )
}

export default ProductInfo
