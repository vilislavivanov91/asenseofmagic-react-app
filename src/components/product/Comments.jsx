import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Comment from './Comment'

const comments = [
  { user: 'First User', id: 1, message: 'Some text here as a commentSome text here as a commentSome text here as a commentSome text here as a comment' },
  { user: 'Second User', id: 2, message: 'Some text here as a commentSomment' },
  { user: 'Third User', id: 3, message: 'Some text here as a commentSome text here as a commentSome text here as a comment' },
  { user: 'Fourth User', id: 4, message: 'Some text here as a commentSome text here as a comment' }
]

class Comments extends Component {
  render () {
    const commentsElement = comments.map(c => {
      return (
        <div key={c.id}>
          <Comment comment={c} />
          <hr className='my-5' />
        </div>
      )
    })

    return (
      <Container className='mt-4'>
        {commentsElement}
      </Container>
    )
  }
}

export default Comments
