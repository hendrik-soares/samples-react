import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostsProvider } from './features/posts/posts.provider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>
);


