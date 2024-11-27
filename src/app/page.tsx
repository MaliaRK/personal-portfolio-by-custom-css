import React from 'react'
import Home from './components/home/page'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Header from './components/header';

const HomePage = () => {
  return (
    <div className='maindiv'>
      <BackgroundBeamsWithCollision>
      <Header/>
      <Home/>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default HomePage
