import * as React from 'react';

export type PostsContextType = {
  posts: string[];
  ADD: (message: string) => void;
  DELETE: (index: number) => void; 
};

export const PostsContext = React.createContext<PostsContextType | null>(null);