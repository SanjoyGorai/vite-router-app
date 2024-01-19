import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import Home from './Componants/Home/Home'
import { Outlet } from "react-router-dom";
import Footer from './Componants/Footer/Footer';

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
