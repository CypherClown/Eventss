import React, { useState } from 'react'
import Button from './Button.jsx'
import { textContent } from '../../data.jsx'

function PostComment({ onAddComment }) {
  const [commentText, setCommentText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(), 
        username: 'You',
        comment: commentText.trim(),
        profileImage: '/assets/profile-img.png'
      }
      if (onAddComment) {
        onAddComment(newComment)
      }
      setCommentText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='post-comment-container flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-[1px] min-h-[70px] sm:h-[70px] p-[9px] sm:p-[9px] border-[#9CA1BE] max-w-[1319px] w-full rounded-[35px] mt-[55px] gap-2 sm:gap-0'>
        <div className="text-side flex items-center gap-[8px] sm:gap-[10px] flex-1 min-w-0">
        <div className="pfp flex-shrink-0">
            <img src="/assets/profile-img.png" alt="profile" className='w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] rounded-full' />
        </div>
        <div className="comment flex-1 min-w-0">
            <input 
              type="text" 
              placeholder={textContent.postComment.placeholder}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className='w-full h-full border-none outline-none bg-transparent text-[12px] sm:text-[14px] md:text-[16px] placeholder:text-[12px] sm:placeholder:text-[14px] md:placeholder:text-[16px]'
            />
        </div>
        </div>
        <Button 
          text={textContent.postComment.button} 
          type="submit"
          className='rounded-full bg-[#2C49FE] text-white font-[600] text-[12px] sm:text-[14px] md:text-[16px] px-3 py-2 sm:px-[28px] sm:py-[11px] whitespace-nowrap flex-shrink-0 w-full sm:w-auto justify-center' 
        />
    </form>
  )
}

export default PostComment