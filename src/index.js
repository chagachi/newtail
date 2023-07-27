import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Film from './Pages/Film';
import "./Styles/Global.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Film />
  },
  {
    path: "/film/:id",
    element: <Film />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
