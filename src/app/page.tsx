import React from 'react'
import Home from './components/home/page'
import About from './components/about/page'
import Contact from './components/contact/page'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Header from './components/header';

const HomePage = () => {
  return (
    <div className='maindiv'>
      <BackgroundBeamsWithCollision>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default HomePage
