import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Layout from './Layout/Layout'
import Homepage from './components/pages/Homepage'

import Extra from './Extra/Extra'
import ErrorPage from './ErrorPage/ErrorPage'
import FriendsCall from './FriendsCallDetails/FriendsCall'
import Timeline from './Timeline/Timeline'
import RecentInteraction from './RecentInteraction/RecentInteraction'
import TwoTime from './assets/TwoTime/TwoTime'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
     
      {
        path: "friendscall/:id",
        element: <FriendsCall />,
        loader: async () => {
          const res = await fetch("/friend.json");
          
          return res.json();
        }
      }
    ]
  },

  {
    path: "extra",
    element: <Extra />
  },
   {
        path: "Timeline",
        element: <Timeline/>
      },
      {
        path:"recentinteraction",
        element: <RecentInteraction/>
      },
      {
        path:"twotime",
        element: <TwoTime/>
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
     <ToastContainer position="top-center" />
  </StrictMode>
);