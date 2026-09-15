import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
