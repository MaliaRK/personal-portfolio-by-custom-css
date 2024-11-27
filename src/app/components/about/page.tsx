import Image from 'next/image'
import React from 'react'
import '@/app/styles/about.css'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutMe'>
            <h2>About Me</h2>
            <p>I am a passionate web developer dedicated to crafting dynamic, user-focused websites. I thrive on transforming innovative ideas into compelling digital experiences, employing the latest technologies to deliver outstanding solutions that enhance user engagement and foster business success.</p>
        </div>
        <h2>Projects</h2>
        <div className='projects' id='projects'>
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>These are some of the command-line applications I have built to demonstrate my ability to develop interactive, logic-driven systems entirely through the terminal, Strengthen Backend Development Skills,
              Master Asynchronous Operations and Improve Problem-Solving.</p>
              <div className='projectDiv'>
                <Image src="/node-js.svg" alt='cli' width={10} height={10} id='projectPic'></Image>
                <h3>Node-Projects</h3>
              </div>
            </div>
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>This interactive Resume website is a personal project built with HTML, CSS, and TypeScript, showcasing both my professional background and my skills as a web developer. The project evolved in three key milestones, starting with a simple static page and gradually incorporating dynamic features and interactivity to create a fully editable resume.</p>
              <div className='projectDiv'>
                <Image src="/typescript.svg" alt='resume' width={50} height={50} id='projectPic'></Image>
                <h3>Resume Builder</h3>
              </div>
            </div>
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>This project is a dynamic countdown timer built using Next.js and React Hooks. It features a clean, user-friendly interface where users can set a target date and time, and the app will display the remaining time in days, hours, minutes, and seconds. Key highlights include.</p>
              <div className='projectDiv'>
                <Image src="/next-dot-js.svg" alt='countdown' width={50} height={80} id='projectPic'></Image>
                <h3>Countdown Timer</h3>
              </div>
            </div>
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>This single-page static e-commerce website was built using Next.js to showcase my ability to develop high-performance, SEO-friendly front-end applications. Designed as a practice project, the site features a modern, user-friendly interface with a focus on speed and responsiveness.</p>
              <div className='projectDiv'>
                <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image>
                <h3>Static E-Commerce Website</h3>
              </div>
            </div>
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>InnovateTech Digital Solution is a static design replica created for practice using Figma. This project involved accurately replicating an existing design concept to hone my skills in visual design, layout, and user interface design principles.</p>
              <div className='projectDiv'>
                <Image src="/next-dot-js.svg" alt='figma' width={50} height={50} id='projectPic'></Image>
                <h3>InnovateTech Digital Solution</h3>
              </div>
            </div>            
            <div id='projectDetail'>
              <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
              <p>Restaurant Website is a multipage website built with Next.js, featuring pages like Home, About, Contact, Menu, and Chef. It showcases key features like multipage routing, responsive layouts, and organized content with easy navigation and a visually appealing design.</p>
              <div className='projectDiv'>
                <Image src="/next-dot-js.svg" alt='restaurant' width={50} height={50} id='projectPic'></Image>
                <h3>Multi-page Restaurant Website</h3>
              </div>
            </div>            
        </div>
        <div className='skills' id='skills'>
          <h2>Worked With...!</h2>
          <div className='skillsList'>
            <div id='workBtn'>
              <Image src="/html.svg" alt='html' width={30} height={30}></Image>
              <p>HTML</p>
            </div>
            <div id='workBtn'>
              <Image src="/css.svg" alt='css' width={30} height={30}></Image>
              <p>CSS</p>
            </div>
            <div id='workBtn'>
              <Image src="/typescript.svg" alt='typescript' width={30} height={30}></Image>
              <p>TypeScript</p>
            </div>
            <div id='workBtn'>
              <Image src="/node-js.svg" alt='nodejs' width={30} height={30}></Image>
              <p>Node.js</p>
            </div>
            <div id='workBtn'>
              <Image src="/next-dot-js.svg" alt='nextjs' width={30} height={30}></Image>
              <p>Next.js</p>
            </div>
            <div id='workBtn'>
              <Image src="/tailwind.svg" alt='tailwind' width={30} height={30}></Image>
              <p>Tailwind</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About