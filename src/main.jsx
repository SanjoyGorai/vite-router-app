import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts from './Componants/contacts.jsx'
import Root from './Componants/Root.jsx'
import ErrorPage from './Componants/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Contacts/> ,
    // element : <App/>

    element: <Root/> ,
    element : <Contacts/>,
    errorElement : <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
console.log();
