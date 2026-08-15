import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
    <nav>
      <div>Find'em</div>
      <div className='navbar-links'>
        <a href="#">Home</a>
        <a href="#">Find an Artisan</a>
        <a href="#">How it works</a>
        <a href="#">Login</a>
        <a href="#">Sign up</a>
      </div>
    </nav>
      {/* <h1>Find'em</h1>
      <p>Find trusted artisans near you</p>
      <button>Find an Artisan</button> */}
    </>
  )
}

export default App
