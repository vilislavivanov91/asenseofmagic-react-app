import React from 'react'
import Comments from './Comments'
import ReviewForm from './ReviewForm'

function ReviewSection (props) {
  return (
    <div className='mt-3 px-auto py-3 border'>
      <h4 className='ml-3 text-info'>Review</h4>
      <hr className='mt-3' />
      <Comments />
      <ReviewForm />
    </div>
  )
}

export default ReviewSection
