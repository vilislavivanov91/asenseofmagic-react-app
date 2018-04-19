import React, { Component } from 'react'
import './Header.css'
import HeaderText from './HeaderText'

const quote = {
  text: 'Ръчно изработените изделия са разкош и не е задължително всеки да ги притежава. Който иска да ги има или трябва да плати на майстора за труда, или да си ги направи сам.',
  cite: 'Коко Шанел'
}

class ImageHeader extends Component {
  render () {
    return (
      <header>
        <div className='image-header'>
          <HeaderText title='A Sense Of Magic' subtitle='some text' quote={quote} />
        </div>
      </header>
    )
  }
}

export default ImageHeader
