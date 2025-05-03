import Image from 'next/image'
import React from 'react'
import '@/app/styles/about.css'
import Link from 'next/link'

const About = () => {
  return (
    <div className='about'>
        <div className='aboutMe' id='about'>
            <h2>About Me</h2>
            <p>I am a passionate web developer dedicated to crafting dynamic, user-focused websites. I thrive on transforming innovative ideas into compelling digital experiences, employing the latest technologies to deliver outstanding solutions that enhance user engagement and foster business success.</p>
        </div>
        <h2>Projects</h2>
        <div className='projects' id='projects'>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I built this Nike-style e-commerce site using Next.js for fast, SEO-friendly performance. The site features a clean, modern interface with effortless product browsing and checkout.
              Under the hood, I integrated Sanity.io for smooth product management, Stripe for secure payment processing, and Clerk for safe and easy user authentication - creating a complete,
              professional shopping experience just like a real platforms.
            </p>
            <div>
              <Link href={"https://e-commerce-marketplace-henna.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/1.png" alt='eCommerce' width={80} height={80} id='projectPic'></Image>
                <h3>Nike E-Commerce Website</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>Agentia World is a modern platform built with Next.js to explore modern web development. It includes sections like Features,
              Technology, Agents, Pricing, and Contact – plus a simulated Launch Console. This project helped me practice creating clean layouts,
              smooth navigation, and working with different web technologies in a realistic setting.
            </p>
            <div>
              <Link href={"https://agentia-world-five.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/agentia.png" alt='eCommerce' width={160} height={80} id='projectPic'></Image>
                <h3>Agentia World</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I developed my personal resume website using TypeScript to showcase my skills in building type-safe, maintainable applications.
              The site features an organized layout highlighting my experience, projects, and technical abilities—all with the added reliability
              and developer experience benefits that TypeScript provides.
            </p>
            <div>
              <Link href={"https://resume-builder-green-mu.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/resume.png" alt='eCommerce' width={160} height={40} id='projectPic'></Image>
                <h3>Personal Resume</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I built a personal blogging website using Next.js, Tailwind CSS and Sanity CMS. This technical blogs sharing my learnings about Next.js development, Tailwind utility, and headless CMS implementation. The website demonstrates
              my practical experience with these modern web tools while creating a space to document my coding journey.
            </p>
            <div>
              <Link href={"https://blog-website-with-sanity-zeta.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/blog.png" alt='Blogging Website' width={160} height={80} id='projectPic'></Image>
                <h3>Blogging Website</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I developed the Panacloud company website using TypeScript. The site features key business sections including
              Why Us, Services, Portfolio, and Our Skills - showcasing the company's expertise through a clean, professional interface. With additional pages for Process,
              Reviews, and Contact Us, this project demonstrates my ability to build structured, conversion-focused business websites with modern tech stacks.
            </p>
            <div>
              <Link href={"https://final-assignment-company-portfolio.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/panacloud.png" alt='Blogging Website' width={160} height={480} id='projectPic'></Image>
                <h3>Panacloud Website</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I developed a Secure Data Encryption System using Python and Streamlit, creating an intuitive web interface for text encryption. The application
              implements modern cryptographic algorithms to protect sensitive data. Demonstrates practical security
              solutions while maintaining accessibility for non-technical users—all within a clean, interactive dashboard that showcases encryption/decryption processes in
              real-time.
            </p>
            <div>
              <Link href={"https://secure-data-encryption-system-pyt.streamlit.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/datasecurity.png" alt='Data Encryption' width={160} height={480} id='projectPic'></Image>
                <h3>Secure Data Encryption System</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>I developed a Secure Data Encryption System using Python and Streamlit, creating an intuitive web interface for text encryption. The application
              implements modern cryptographic algorithms to protect sensitive data. Demonstrates practical security
              solutions while maintaining accessibility for non-technical users—all within a clean, interactive dashboard that showcases encryption/decryption processes in
              real-time.
            </p>
            <div>
              <Link href={"https://unitconverter2.streamlit.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/unitconverter.png" alt='unit converter' width={160} height={480} id='projectPic'></Image>
                <h3>Unit Converter</h3>
                </Link>
            </div>
          </div>
          <div id='projectDetail'>
            <Image src="/invertedcomas.png" alt='comas' width={15} height={15} id='comaPic'></Image>
            <p>This project is a dynamic countdown timer built using Next.js and React Hooks. It features a clean, user-friendly interface where users can set a target date
              and time, and the app will display the remaining time in days, hours, minutes, and seconds. Key highlights include.
            </p>
            <div>
              <Link href={"https://countdown-timer-cyan-eight.vercel.app/"} target='_blank' className='projectDiv'>
                {/* <Image src="/next-dot-js.svg" alt='eCommerce' width={10} height={80} id='projectPic'></Image> */}
                <Image src="/countdown.png" alt='Countdowun Timer' width={160} height={480} id='projectPic'></Image>
                <h3>Countdowun Timer</h3>
                </Link>
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
            <div id='workBtn'>
              <Image src="/python.svg" alt='python' width={30} height={30}></Image>
              <p>Python</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About