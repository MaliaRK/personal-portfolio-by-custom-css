'use client'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiOctagon } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React , {useEffect} from 'react'
import {TypeAnimation} from 'react-type-animation'
import '@/app/styles/home.css'
import About from '../about/page'
import Contact from '../contact/page'


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
  return (
    <>
        <div className='home'>
            <div className='homeContent'>
                <h3>Hello, It&apos;s Me</h3> 
                <h1>Malia Raees</h1> 
                <span>And I&apos;m {""}</span>
                <TypeAnimation 
                sequence={["Front-end Developer!", 1000, "Back-end Developer!", 1000, 'Responsive Web Designer!', 1000]}
                wrapper='span'
                repeat={Infinity}
                speed={30}
                className='typeAnimation'/>
                <p>I&apos;m a web developer with a passion for crafting dynamic, user-friendly websites. I thrive on turning ideas into engaging online experiences.</p>
                <div>
                    <FaFacebook style={{color: 'cyan', fontSize: '20px'}}/>
                    <FaInstagram style={{color: 'cyan', fontSize: '20px'}}/>
                    <FaLinkedin style={{color: 'cyan', fontSize: '20px'}}/>
                    <FaGithub style={{color: 'cyan', fontSize: '20px'}}/>
                </div>
                <button>Download CV</button>
            </div>
            <div className='xshomeContent'>
                <h3>Hello, It&apos;s Me</h3> 
                <h1>Malia Raees</h1>
            </div>
            <div className='homeProfile'>
                <FiOctagon style={{fontSize: '220px', zIndex: 10, borderRadius: '4px', color: 'cyan', boxShadow: 'inset 0 4px 20px rgba(0, 255, 255, 0.7)'}}/>
                <div id='upperdiv'></div>
                <Image src="/mypic1.png" alt="myPic" height={0} width={180} data-aos="fade-up" id='myPic'></Image>
                <div id='lowerdiv'></div>
            </div>
        </div>
        <About/>
        <Contact/>
    </>   
  )
}

export default Home
