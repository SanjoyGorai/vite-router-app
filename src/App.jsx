import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import Home from './Componants/Home/Home'
import { Outlet } from "react-router-dom";
import Footer from './Componants/Footer/Footer';
import { lazy } from 'react';

// const  = lazy(()=> import(''))

function App() {

  return (
    <>
      <div className=''>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
