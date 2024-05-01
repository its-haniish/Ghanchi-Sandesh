import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';

import Blogs from "./screens/blog/Blogs.jsx"
import AddPost from './screens/blog/AddPost.jsx';
import EditPost from './screens/blog/EditPost.jsx';
import Articles from './screens/article/Articles.jsx';
import AddArticle from './screens/article/AddArticle.jsx'
import EditArticle from './screens/article/EditArticle.jsx';
import Videos from './screens/video/Videos.jsx';
import AddVideo from "./screens/video/AddVideo.jsx"
import EditVideo from './screens/video/EditVideo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />
  },
  {
    path: "/add-post",
    element: <AddPost />
  },
  {
    path: "/edit/:slug",
    element: <EditPost />
  },
  {
    path: "/articles",
    element: <Articles />
  },
  {
    path: "/add-article",
    element: <AddArticle />
  },
  {
    path: "/edit-article/:slug",
    element: <EditArticle />
  },
  {
    path: "/videos",
    element: <Videos />
  },
  {
    path: "/add-video",
    element: <AddVideo />
  },
  {
    path: "/edit-video/:encodedLink",
    element: <EditVideo />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
