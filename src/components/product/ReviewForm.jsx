import React from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function ReviewForm (props) {
  return (
    <div>
      <Col className='text-center' sm={4}>
        <h4 className='ml-5 mb-3 border-bottom'>Write a review</h4>
      </Col>
      <Form>
        <FormGroup row>
          <Label sm={{size: 2, offset: 1}}>Your name</Label>
          <Col sm={8}>
            <Input className='mt-1' type='text' />
          </Col>
          <Label sm={{size: 2, offset: 1}}>Your message</Label>
          <Col sm={8}>
            <Input className='mt-1' type='text' />
          </Col>
          <Col className='mt-4' sm={{size: 8, offset: 3}}>
            <Button block>Send</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default ReviewForm
