import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';

import Blogs from "./screens/Blogs.jsx"
import AddPost from './screens/AddPost.jsx';
import EditPost from './screens/EditPost.jsx';
import AddArticle from './screens/AddArticle.jsx';
import Articles from './screens/Articles.jsx';
import EditArticle from './screens/EditArticle.jsx';
import AddVideo from './screens/AddVideo.jsx';
import Videos from './screens/Videos.jsx';
import EditVideo from './screens/EditVideo.jsx';
import Pdfs from './screens/Pdfs.jsx'
import AddPdf from './screens/AddPdf.jsx'
import EditPdf from './screens/EditPdf.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
    errorElement: <Blogs />
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
    path: "/add-article",
    element: <AddArticle />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/edit-article/:slug',
    element: <EditArticle />
  },
  {
    path: '/add-video',
    element: <AddVideo />
  },
  {
    path: '/videos',
    element: <Videos />
  },
  {
    path: '/edit-video/:id',
    element: <EditVideo />
  },
  {
    path: '/pdfs',
    element: <Pdfs />
  },
  {
    path: '/add-pdf',
    element: <AddPdf />
  },
  {
    path: '/edit-pdf/:id',
    element: <EditPdf />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
