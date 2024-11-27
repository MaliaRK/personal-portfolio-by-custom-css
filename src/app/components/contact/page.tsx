import React from 'react'
import '@/app/styles/contact.css'
import Footer from '../footer'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contactDetail'>
            <h2>Get In Touch</h2>
            <p>I&apos;d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out and I&apos;ll get back to you as soon as possible.!</p>
            <fieldset>
                <h6>Email:</h6>
                <input type='email' placeholder='Please Enter Your Email' required/>  
                <h6>Mobile:</h6>
                <input type='tel' placeholder='Enter Mobile Number' />
                <h6>Message</h6>
                <textarea name="meassage" required placeholder='Enter Your Message' rows={6}></textarea>
            </fieldset>
            <button>Submit</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact