import React from 'react'
import BookImage from '../src/assets/images/land.png'
import "../src/App.css";


const Front = () => {
  return (
    <div className='d-flex justify-content-between frontMain'>
            <div className='frontOne'>
            <h1 style={{fontSize:"50px"}}>Welcome to WordWave!</h1>
            <br />
            <p className='frontPara'>Dive into the endless ocean of stories, knowledge, and imagination. Here, each book is a ripple in the wave of wisdom, waiting to be discovered. Add, explore, and curate your own collection, one page at a time. Whether you're a curious reader, an avid collector, or a seeker of stories, WordWave is your gateway to worlds unknown.</p>
            </div>
            <div className='frontTwo'>
            <img className='bookImage' src={BookImage} alt="None" />
            </div>
           
    </div>
  )
}

export default Front
