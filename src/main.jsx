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
        Component: Home,
        loader: async()=>{
          const url = await fetch("https://simple-books-api.click/books")
          if(!url.ok){
            throw new Error(" Your Books Data Fetch Problem")
          }

          return url.json()
        }
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
