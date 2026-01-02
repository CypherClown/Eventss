import React, { useState } from 'react'
import Container from '../common/components/Container.jsx'
import Profile from '../components/elements/Profile.jsx'
import Quote from '../components/elements/Quote.jsx'
import GalleryGrid from '../components/elements/GalleryGrid.jsx'
import TellUs from '../components/elements/TellUs.jsx'
import PostComment from '../components/elements/PostCommentBox.jsx'
import CommentSection from '../components/CommentSection.jsx'

function Username() {
  const [newComments, setNewComments] = useState([])

  const handleAddComment = (newComment) => {
    setNewComments(prev => [...prev, newComment])
  }

  return (
    <div className="flex flex-col min-h-screen pt-[80px]">
      <Container className="py-8 md:py-16">
        <Profile />
        <Quote />
        <GalleryGrid />
        <TellUs />
        <PostComment onAddComment={handleAddComment} />
        <CommentSection comments={newComments} />
      </Container>
    </div>
  )
}

export default Username

