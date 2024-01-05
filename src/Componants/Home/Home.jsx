import React from 'react'
import chip from '../../assets/chip.webp'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='bg-red-200'>
                <h1>Home Page</h1>
                <div className='container'>
                    <div className='div1'>
                        <h1>Introduction the New <br /> Dell Laptop Series</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button className='bg-green-400' >Shop Now</button>
                    </div>
                    <div className='div2'>
                        <img src={chip} alt="" className='w-52 rounded' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home