import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import App from "./screens/App.jsx"
import AddPost from './screens/AddPost.jsx';
import EditPost from './screens/EditPost.jsx';


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
