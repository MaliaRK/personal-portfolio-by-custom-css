'use client'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import { FiOctagon } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React , {useEffect} from 'react'
import {TypeAnimation} from 'react-type-animation'


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
  return (
    <>
        <div className='grid sm:grid-cols-1 md:grid-cols-[50%_auto] bg-gray-800 text-white mx-2 md:mx-6 py-5 px-16 border-2 border-cyan-500 rounded md:rounded-none'>
            <div className='mt-20 md:mt-14 md:ml-6 order-2 md:order-1'>
                <h3 className='font-semibold text-xl'>Hello, It&apos;s Me</h3> 
                <h1 className='font-bold text-3xl md:text-5xl my-2'>Malia Raees</h1> 
                <span className='font-semibold text-xl'>
                    And I&apos;m {""}
                </span>
                <TypeAnimation 
                sequence={["Front-end Developer!", 1000, "Back-end Developer!", 1000, 'Responsive Web Designer!', 1000]}
                wrapper='span'
                repeat={Infinity}
                speed={30}
                className='text-cyan-500 text-xl'
                />
                <p className='mt-4'>I&apos;m a web developer with a passion for crafting dynamic, user-friendly websites. I thrive on turning ideas into engaging online experiences.</p>
                <div className='flex gap-5 mt-4'>
                    <FaFacebook style={{color: 'cyan', fontSize: '20px'}}/> <FaInstagram style={{color: 'cyan', fontSize: '20px'}}/> <FaLinkedin style={{color: 'cyan', fontSize: '20px'}}/> <FaGithub style={{color: 'cyan', fontSize: '20px'}}/>
                </div>
                    <button className=" mt-6 px-4 py-2 rounded-md border border-black bg-cyan-500 text-black font-semibold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Download CV</button>
            </div>
            <div className='flex items-center justify-center mt-[70%] md:mt-0 order-1 md:order-2'>
                <FiOctagon style={{fontSize: '220px', color: 'cyan', boxShadow: 'inset 0 4px 20px rgba(0, 255, 255, 0.7)'}} className='z-10 rounded '/>
                <div style={{ backgroundColor: 'cyan'}} className='absolute w-[177px] h-[125px] mb-14 rounded-t-full z-30'></div>
                <Image src="/mypic1.png" alt="myPic" height={0} width={180} className='absolute bottom-[64%] md:bottom-[33%] ml-4 h-52 z-40 ' data-aos="fade-up"></Image>
                <div style={{ backgroundColor: 'cyan'}} className='absolute w-[168px] h-14 -mb-32 rounded-b-full z-30'></div>
            </div>
        </div>
    </>   
  )
}

export default Home