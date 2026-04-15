import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from './components/pages/Homepage'
import Books from './Books/Books'
import Navbar from './Navbar/Navbar'
import ErrorPage from './ErrorPage/ErrorPage'
import Extra from './Extra/Extra'



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navbar/>,
    children:[
      {
        index: true,
        element:<Homepage/>
      },
      {
        path:"/books",
        element: <Books/>
      },
      {
        path:"/extra",
        element:<Extra/>
      }
    ],
    errorElement: <ErrorPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>


  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
