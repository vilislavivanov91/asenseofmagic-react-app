import React, { Component } from 'react'
import { IoIosCart } from 'react-icons/lib/io'
import { Nav, NavItem, NavLink, Form, FormGroup, Input, Button, Badge, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

class NavigationSecondary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      productsInCart: 1,
      popoverOpen: false
    }

    // Bind Handlers
    this.togle = this.togle.bind(this)
  }
  togle () {
    this.setState((prevState) => {
      return { popoverOpen: !prevState.popoverOpen }
    })
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
          <NavItem id='PopoverActivator' onClick={this.togle}>
            <NavLink href='#'>
              <IoIosCart className='text-secondary mr-0 h1 mr-1 pt-1' />
              <Badge color='success' className='ml-0'>
                {this.state.productsInCart}
              </Badge>
            </NavLink>
          </NavItem>
          <Popover
            className='mr-3'
            placement='bottom'
            isOpen={this.state.popoverOpen}
            toggle={this.togle}
            target='PopoverActivator'>
            <PopoverHeader>Some heading text</PopoverHeader>
            <PopoverBody>Some body</PopoverBody>
          </Popover>
        </Nav>
      </div>
    )
  }
}

export default NavigationSecondary
