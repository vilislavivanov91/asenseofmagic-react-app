import React from 'react'
import { Row } from 'reactstrap'
import { IoSocialPinterest, IoSocialFacebook, IoSocialTwitter, IoSocialGoogleplus } from 'react-icons/lib/io'

function SharingButtons (props) {
  return (
    <div>
      <p className='text-center mt-3'>Сподели</p>
      <Row className='no-gutters'>
        <Row className='mx-auto'>
          <div id='wrapper'>
            <div id='share'>
              <a href='#' className='container-share twitter'>
                <svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 200 200' className='circle'>
                  <circle cx='100' cy='100' r='50' />
                </svg>
                <div className='social'>
                  <IoSocialTwitter />
                </div>
              </a>
              <a href='#' className='container-share facebook'>
                <svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 200 200' className='circle'>
                  <circle cx='100' cy='100' r='50' />
                </svg>
                <div className='social'>
                  <IoSocialFacebook />
                </div>
              </a>
              <a href='#' className='container-share google'>
                <svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 200 200' className='circle'>
                  <circle cx='100' cy='100' r='50' />
                </svg>
                <div className='social'>
                  <IoSocialGoogleplus />
                </div>
              </a>
              <a href='#' className='container-share pinterest'>
                <svg preserveAspectRatio='xMinYMin meet' viewBox='0 0 200 200' className='circle'>
                  <circle cx='100' cy='100' r='50' />
                </svg>
                <div className='social'>
                  <IoSocialPinterest />
                </div>
              </a>
            </div>
          </div>
        </Row>
      </Row>
    </div>

  )
}

export default SharingButtons
