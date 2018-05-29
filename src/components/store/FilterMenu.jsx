import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, InputGroup, Input } from 'reactstrap'

const FilterMenu = (props) => {
  return (
    <div className='mr-1'>
      <p className='mb-1'>цена</p>
      <InputGroup size='sm' className='mb-3'>
        <Input placeholder='мин.цена' name='min-value' />
        <span className='mx-2'> - </span>
        <Input placeholder='макс.цена' name='max-value' />
      </InputGroup>
      <hr />
      <p className='mb-1'>категория</p>
      <Container>
        <Row>
          <Link className='text-secondary my-2' to='?first'>Първа категория</Link>
        </Row>
        <Row>
          <Link className='text-secondary my-2' to='?second'>Втора категория</Link>
        </Row>
        <Row>
          <Link className='text-secondary my-2' to='?thirth'>Трета категория</Link>
        </Row>
        <Row>
          <Link className='text-secondary my-2' to='?fourth'>Четвърта категория</Link>
        </Row>
        <Row>
          <Link className='text-secondary my-2' to='?fifth'>Пета категория</Link>
        </Row>
      </Container>
    </div>
  )
}

export default FilterMenu
