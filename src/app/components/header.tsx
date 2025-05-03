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
          <a href='/'><li>Home</li></a>
          <a href='#about'><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href='#contact'><li>Contact</li></a>
        </ul>
        <div id='hamMenu'>
          <FaHamburger id='hamburger' onClick={handleClick}/>
          {showNavbar && (
              <ul id="navUl">
                <a href='/'><li>Home</li></a>
                <a href='#about'><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href='#contact'><li>Contact</li></a>
              </ul>
              )
          }
        </div>
      </div>
    </header>
  )
}

export default Header
