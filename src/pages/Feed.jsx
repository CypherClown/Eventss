import React from 'react'
import Container from '../common/components/Container.jsx'
import FeedProfile from '../components/elements/FeedProfile.jsx'
import NewPostsContainer from '../components/NewPostsContainer.jsx'

function Feed() {
  return (
    <div className="flex flex-col min-h-screen pt-[80px]">
      <Container className="py-8 md:py-16">
        <FeedProfile />
        <NewPostsContainer />
      </Container>
    </div>
  )
}

export default Feed

