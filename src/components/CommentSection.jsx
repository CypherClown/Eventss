import React, { useState, useEffect } from 'react'
import Comment from './elements/Comment.jsx'
import { commentsData } from '../data.jsx'

function CommentSection({ comments: externalComments }) {
  const [comments, setComments] = useState(commentsData)

  useEffect(() => {
    if (externalComments && externalComments.length > 0) {
      setComments(prev => {
        const existingIds = new Set(prev.map(c => c.id))
        const newComments = externalComments.filter(c => !existingIds.has(c.id))
        return [...prev, ...newComments]
      })
    }
  }, [externalComments])

  const handleRemoveComment = (id) => {
    setComments(prev => prev.filter(comment => comment.id !== id))
  }

  return (
    <div className='comment-section-container flex flex-col items-center justify-center mt-[47px] gap-[24px] w-full max-w-[1319px]'>
      {comments.length === 0 ? (
        <p className='text-[#666666] text-center'>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            username={comment.username}
            comment={comment.comment}
            profileImage={comment.profileImage}
            onRemove={handleRemoveComment}
          />
        ))
      )}
    </div>
  )
}

export default CommentSection