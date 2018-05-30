import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class SortMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpne: false
    }

    // Bind Handlers
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState((prevState, props) => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  render () {
    const sortDisplayElement = this.props.sortDisplay ? (
      <p>{this.props.sortDisplay}</p>
    ) : ''

    return (
      <div className='order-button'>
        <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
          <DropdownToggle outline color='info' caret>
            Подреди по
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem active={this.props.sortBy === 'alphabetically'} onClick={this.props.handleAlphabeticallyButtonClicked}>Азбучен ред</DropdownItem>
            <DropdownItem active={this.props.sortBy === 'newestFirst'} onClick={this.props.handleNewestButtonClicked}>Най-ново</DropdownItem>
            <DropdownItem active={this.props.sortBy === 'lowestPriceFirst'} onClick={this.props.handleLowestPriceButtonClicked}>Най-ниска цена</DropdownItem>
            <DropdownItem active={this.props.sortBy === 'highestPriceFirst'} onClick={this.props.handleHighestPriceButtonClicked}>Най-висока цена</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        {sortDisplayElement}
      </div>
    )
  }
}

export default SortMenu
