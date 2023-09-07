import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Banner.css'

function Banner() {
  return (
    <div className='banner-container'>
        <h1>The Balugas</h1>
        <h2>New Single</h2>
        <h2>"One Night"</h2>
    <div className='banner-btn'>
        <Button className="btn" buttonStyles='btn--outline' buttonSize='btn--large'>Stream Now</Button>
    </div>
    </div>
  )
}

export default Banner