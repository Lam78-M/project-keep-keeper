import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'



const router = createBrowserRouter([
  
  {
    path: "/",
    element: "Homepage"
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <h2 className='text-green-700 text-4xl border'>as salamu alaikum</h2>

  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
