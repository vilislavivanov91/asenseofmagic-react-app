import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Store.css'
import FilterMenu from './FilterMenu'
import StoreContent from './StoreContent'
import SortMenu from './SortMenu'

class Store extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <Container fluid>
        <div className='store-wrapper'>
          <SortMenu />
          <hr />
          <Row>
            <Col xs={3}>
              <FilterMenu />
            </Col>
            <Col xs={9}>
              <StoreContent />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Store
