import React from 'react'
import { Badge } from 'reactstrap'

function Comment (props) {
  return (
    <div>
      <Badge color='info' className='p-1 mb-2'>
        <span className='h5'>{props.comment.user}</span>
      </Badge>
      <p className='py-5 pl-3 w-100 border rounded'>
        {props.comment.message}
      </p>
    </div>
  )
}

export default Comment
