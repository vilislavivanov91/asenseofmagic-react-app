import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Store.css'
import FilterMenu from './FilterMenu'
import StoreContent from './StoreContent'
import SortMenu from './SortMenu'

class Store extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sortBy: '',
      alphabetically: false,
      newest: false,
      lowest: false,
      highest: false
    }

    // Bind Handlers
    this.handleAlphabeticallyButtonClicked = this.handleAlphabeticallyButtonClicked.bind(this)
    this.handleNewestButtonClicked = this.handleNewestButtonClicked.bind(this)
    this.handleLowestPriceButtonClicked = this.handleLowestPriceButtonClicked.bind(this)
    this.handleHighestPriceButtonClicked = this.handleHighestPriceButtonClicked.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleAlphabeticallyButtonClicked () {
    this.setState({
      sortBy: 'alphabetically'
    })
  }
  handleNewestButtonClicked () {
    this.setState({
      sortBy: 'newestFirst'
    })
  }
  handleLowestPriceButtonClicked () {
    this.setState({
      sortBy: 'lowestPriceFirst'
    })
  }
  handleHighestPriceButtonClicked () {
    this.setState({
      sortBy: 'highestPriceFirst'
    })
  }
  render () {
    return (
      <Container fluid>
        <div className='store-wrapper'>
          <SortMenu
            handleAlphabeticallyButtonClicked={this.handleAlphabeticallyButtonClicked}
            handleNewestButtonClicked={this.handleNewestButtonClicked}
            handleLowestPriceButtonClicked={this.handleLowestPriceButtonClicked}
            handleHighestPriceButtonClicked={this.handleHighestPriceButtonClicked}
            sortBy={this.state.sortBy} />
          <hr />
          <Row>
            <Col xs={3}>
              <FilterMenu />
            </Col>
            <Col xs={9}>
              <div className='products-wrapper'>
                <StoreContent sortBy={this.state.sortBy} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Store
