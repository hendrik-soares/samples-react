import React, { useState } from 'react'
import { ADD, DELETE } from './posts.slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'


export function Posts() {
  // The `state` arg is correctly typed as `RootState` already
  const posts = useAppSelector((state) => state.posts.value)
  const dispatch = useAppDispatch()

  const [message, setMessage] = useState('');

  const addPost = () => {
    if (message !== '') {
      dispatch(ADD(message));
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
            onClick={() => dispatch(DELETE(index))}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}