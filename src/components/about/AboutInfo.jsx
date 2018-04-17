import React from 'react'

function AboutInfo (props) {
  return (
    <div className='about-info'>
      <h2>{props.info.title}</h2>
      <p>{props.info.text}</p>
    </div>
  )
}

export default AboutInfo
