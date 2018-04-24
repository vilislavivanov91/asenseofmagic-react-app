import React, { Component } from 'react'
import { IoIosCart } from 'react-icons/lib/io'
import { Nav, NavItem, NavLink, Form, FormGroup, Input, Button, Badge } from 'reactstrap'

class NavigationSecondary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      productsInCart: 1
    }
  }
  render () {
    return (
      <div>
        <Nav>
          <Form inline>
            <FormGroup>
              <Input className='mr-1' placeholder='Search' />
              <Button outline color='info'>Seacrh</Button>
            </FormGroup>
          </Form>
          <NavItem>
            <NavLink href='#'>
              <IoIosCart className='text-secondary mr-0 h1 mr-1 pt-1' />
              <Badge color='success' className='ml-0'>{this.state.productsInCart}</Badge>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavigationSecondary
