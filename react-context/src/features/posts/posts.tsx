import React, { useContext, useState } from 'react'
import { PostsContext, PostsContextType } from './posts.context';

export function Posts() {

  const [message, setMessage] = useState('');
  const { posts, ADD, DELETE } = useContext(PostsContext) as PostsContextType;


  const addPost = () => {
    if (message !== '') {
      ADD(message);
      setMessage('');
    }
  }

  return (
    <div>
      
      {/* add post */}
      <input value={message} name='message' type='text' onChange={(e) => setMessage(e.target.value)} />
      <button
        aria-label='add new post'
        onClick={() => addPost()}
      >
        Add New Post
      </button>
      
      
      {/* list posts */}
      { posts.map((p: string, index: number) => 
        <div key={`post-${index}`}> 
          <span>{p} </span>
          <button
            aria-label='delete post'
            onClick={() => DELETE(index)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}