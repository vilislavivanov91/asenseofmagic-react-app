import React from 'react'

function HeaderText (props) {
  return (
    <div className='header-text-wrapper'>
      <hr />
      <hr />
      <div className='header-text'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <div className='quotes'>
          <blockquote>
            {props.quote.text}
            <cite>{props.quote.cite}</cite>
          </blockquote>
        </div>
        <a href='store'>Shop Now</a>
      </div>
      <hr />
      <hr />
    </div>
  )
}

export default HeaderText
