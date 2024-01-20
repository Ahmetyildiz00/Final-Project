import React from 'react'
import "./Home.css"
import meram from "../assets/meram.png"

function Home() {
    return (
        <div className='home'>
            <div className='home-image'>
                <img src={meram} alt="" />
            </div>
            <div className='home_title'>
                <h1>MERAM BELEDİYESİ</h1>
            </div>
        </div>


    )
}

export default Home