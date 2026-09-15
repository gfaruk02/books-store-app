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
import BookDetail from './pages/BookDetail.jsx';
import NotFound from './components/NotFound.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Loading from './components/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement:<ErrorPage/>,
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
        },
        hydrateFallbackElement:<Loading/>
      },
       {
        path: "/books/:id",
        Component: BookDetail,
       loader: async({params})=>{
        console.log(params)
          const url = await fetch(`https://simple-books-api.click/books/${params.id}`)
          if(!url.ok){
            throw new Error(" Your Books Data Fetch Problem")
          }

          return url.json()
        }
      },

      {
        path: '/about',
        Component: About
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
