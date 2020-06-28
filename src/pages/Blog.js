import React from 'react'

const Blog = () => {
  const BlogList = [{}]
  return (
    <div>
      {BlogList.map((item, index) => (
        <BlogItem {...item} key={index} />
      ))}
    </div>
  )
}

const BlogItem = ({ title, timestamp }) => {
  return <div></div>
}

export default Blog
