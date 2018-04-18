import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaFacebook from 'react-icons/lib/fa/facebook'

function AboutImage (props) {
  return (
    <div className='about-image'>
      <img src={props.image.src} alt={props.image.name} />
      <div className='about-contact'>
        <a href=''>
          <FaEnvelope />
        </a>
        <a href={props.facebook}>
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default AboutImage
