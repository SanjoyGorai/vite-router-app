import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import { BrowserRouter, RouterProvider,createBrowserRouter } from 'react-router-dom'
// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage'
import Contacts from '../Contacts'
import App from '../../App.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        // element: <Contacts/> ,
        // element : <App/>

        element: <Home />,
        // element: <Contacts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contacts',
                element: <Contacts />
            },
        ]
    },
    {
        // path: 'contacts/',
        path: 'contacts/:contactId',
        element: <Contacts />
    },
    {
        path: 'blogs/',
        // element: <Blogs />
    },
    {
        path: 'prodcuts',
        // element: <Mouse />,
        children: [
            {
                path: 'keyboards',
                // element: <Keyboard />
            }
        ]
    },
    {
        // path: 'Keyboard',
        // element: <Blogs/>
    },
    {
        path: 'about',
        // element: <About name={user.name} />
    }, {
        path: '/home',
        element: <Home />
    },
    {
        path: 'collections',
        // element: <Collections />
    }
]);


const Navbar = () => {

    return (
        <>
            <nav className='bg-green-500'>
                <ul className='text-white bg-blue-600' >
                    <li className=''><Link to="/"> Home</Link></li>
                    <li><Link to="features">Features</Link></li>
                    <li><Link to="/collections">Collections</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </nav>
        </>

    )
}

export default Navbar