import React from 'react'
import './CircleBadge.css'

function CircleBadge (props) {
  return (
    <div className='circle-badge'>
      <strong>{props.children}</strong>
    </div>
  )
}

export default CircleBadge
