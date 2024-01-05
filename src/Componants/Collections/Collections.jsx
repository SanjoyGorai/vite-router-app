import React from 'react'
import './Collections.css'
import doll from '../../assets/doll.png'
import mobile from '../../assets/mobile.webp'
import camera from '../../assets/camera.png'


const Collections = () => {
    return (
        <>
          <div className='container'>
                <div className='div1'>
                    <h1>Introduction the New <br /> Dell Laptop Series</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button className='' >Shop Now</button>
                </div>
                <div className='div2'>
                    <img src={camera} alt="" />
                    <img src={doll} alt="" />
                    <img src={mobile} alt="" />
                </div>
            </div>

        </>
    )
}

export default Collections