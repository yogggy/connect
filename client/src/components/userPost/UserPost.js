import React from 'react'
import Post from '../post/Post';
import './userPost.css'
import { useState } from 'react';

const UserPost = () => {
  const [post,setpost] = useState([
    {
      username:"Shubham",
      caption:"Looks Great",
      imageUrl:"https://images.unsplash.com/photo-1617039988702-24d699c4627b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80"
    },
    {
      username:"Kartik",
      caption:"Looks Great",
      imageUrl:"https://images.unsplash.com/photo-1624460228635-daf0d334a433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
    },
    {
      username:"Bhavesh",
      caption:"Looks Great",
      imageUrl:"https://images.unsplash.com/photo-1616928296082-defb515b2c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
    }
  ])

  return (
    <div>
{post.map((data,idx)=>{
  return <Post key={idx} username={data.username} caption={data.caption} imageUrl={data.imageUrl}></Post>
})}

    </div>
  )
}

export default UserPost;