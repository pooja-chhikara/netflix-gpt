import React from 'react'
import {createBrowserRouter,RouterProvider } from "react-router-dom"

import Browse from './Browse'

import Login from './Login'

const Home = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
          <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Home