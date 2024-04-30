import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import App from "./screens/App.jsx"
import AddPost from './screens/AddPost.jsx';
import EditPost from './screens/EditPost.jsx';
import Articles from './screens/Articles.jsx';
import AddArticle from './screens/AddArticle.jsx';
import EditArticle from './screens/EditArticle.jsx';
import Videos from "./screens/Videos.jsx"
import AddVideo from './screens/AddVideo.jsx';
import EditVideo from "./screens/EditVideo.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
