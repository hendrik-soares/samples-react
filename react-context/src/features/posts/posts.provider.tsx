import * as React from 'react'
import { PostsContext } from './posts.context';

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPost] = React.useState<string[]>([]);

  const ADD = (message: string) => {
    setPost([...posts, message]);
  };

  const DELETE = (index: number) => {
    const result = posts.filter((p: string, i: number) => i !== index );
    setPost(result);
  };

  return (
    <PostsContext.Provider value={{ posts, ADD, DELETE }}>
      { children }
    </PostsContext.Provider>
  );
}