'use client'
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa';
import '@/app/styles/header.css'
import Link from 'next/link';

const Header = () => {
  const [showNavbar, isShowNavbar] = useState(false);

    function handleClick() {
        isShowNavbar(!showNavbar);
    }
  return (
    <header>
      <div id='header'>
        <h3>Portfolio.</h3>
        <ul id='headerUl'>
          <Link href='/components/home' target='_blank'><li>Home</li></Link>
          <Link href='/components/about' target='_blank'><li>About</li></Link>
          <Link href='/components/contact' target='_blank'><li>Contact</li></Link>
          <li>Skills</li>
          <a href="#projects"><li>Projects</li></a>
        </ul>
        <div id='hamMenu'>
          <FaHamburger id='hamburger' onClick={handleClick} className='hidde'/>
          {showNavbar && (
              <ul id="navUl">
                  <Link href='/components/home' target='_blank'><li>Home</li></Link>
                  <Link href='/components/about' target='_blank'><li>About</li></Link>
                  <Link href='/components/contact' target='_blank'><li>Contact</li></Link>
                  <li>Skills</li>
                  <a href="#projects"><li>Projects</li></a>
              </ul>
              )
          }
        </div>
      </div>
    </header>
  )
}

export default Header
