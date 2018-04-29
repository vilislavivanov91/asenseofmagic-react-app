import React, { Component } from 'react'
import { Nav, Form, FormGroup,
  Input, Button } from 'reactstrap'
import CartPopoverMenu from '../cart/CartPopoverMenu'

class NavigationSecondary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      productsInCart: 1,
      popoverOpen: false
    }

    // Bind Handlers
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
          <CartPopoverMenu />
        </Nav>
      </div>
    )
  }
}

export default NavigationSecondary
