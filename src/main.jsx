import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Componants/ErrorPage.jsx'
import Collections from './Componants/Collections/Collections.jsx'
import Navbar from './Componants/Navbar/Navbar.jsx'
import Features from './Componants/Features/Features.jsx'
import Shop from './Componants/Shop/Shop.jsx'
import AboutUs from './Componants/About Us/AboutUs.jsx'
import ContactUs from './Componants/Contact Us/ContactUs.jsx'
import Home from './Componants/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/features',
        element: <Features />
      },
      {
        path: '/collections',
        element: <Collections />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      }]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
console.log();
