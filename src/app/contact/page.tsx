import React from 'react'
import Image from "next/image"
import Button from '../components/button'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-[#1f2937] text-white py-5 mx-[24px]' id='contact'>
        <h2 className='underline text-2xl text-center font-semibold pt-10'>Let&apos;s connect</h2>
        <p className='text-xl md:text-center font-sans mx-5 md:mx-[200px]'>I&apos;d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out and I&apos;ll get back to you as soon as possible.!</p>
        <div className='md:flex items-center justify-center my-10'>
            <Image src='/contact.png' alt='contact' width={600} height={40} />
            <form className='mx-[20%] md:mx-0'>
                <label className='flex gap-1'>
                    <Image src='/person.svg' alt='person' width={20} height={10}/>
                    <h4>Name</h4>
                </label>
                <p><input type="text" name='name' value={formData.name} onChange={handleChange} className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white' required/></p>
                <label className='flex gap-1 mt-5'>
                    <Image src='/email.svg' alt='email' width={20} height={10}/>
                    <h4>Email</h4>
                </label>
                <p><input type="email" name='email' value={formData.email} onChange={handleChange} className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white' required/></p>
                <label className='flex gap-1 mt-5'>
                    <Image src='/message.svg' alt='message' width={20} height={10}/>
                    <h4>Message</h4>
                </label>
                <p><textarea name='message' value={formData.message} onChange={handleChange} rows={5} cols={30} className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white' required/></p>
                {/* <Button text='Send Meesage'/> */}
                <button type='submit' disabled={isSubmitting} className='bg-gradient-to-r from-[#06b6d4] to-[#1e7583] text-white rounded py-1 px-4 font-semibold hover:scale-105 duration-150'>
                    {isSubmitting ? "Sending..." : "Send Meesage"}
                </button>

                {submitStatus === 'success' && (
                    <p className="mt-2 text-green-500">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="mt-2 text-red-500">Failed to send message. Please try again.</p>
                )}
            </form>
        </div>
        <hr className='border-[#06b6d4]'/>
        <footer className='flex gap-2 items-center justify-center mt-10'>
            <p><u>©All Rights Reserved</u></p>
            <Image src='/m.png' alt='linkedin' width={40} height={40} />
        </footer>
    </div>
  )
}

export default Contact






// import React from 'react'
// import Image from "next/image"
// import Button from '../components/button'


// const Contact = () => {
//   return (
//     <div className='bg-[#1f2937] text-white py-5 mx-[24px]' id='contact'>
//         <h2 className='underline text-2xl text-center font-semibold pt-10'>Let&apos;s connect</h2>
//         <p className='text-xl md:text-center font-sans mx-5 md:mx-[200px]'>I&apos;d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out and I&apos;ll get back to you as soon as possible.!</p>
//         <div className='md:flex items-center justify-center my-10'>
//             <Image src='/contact.png' alt='contact' width={600} height={40} />
//             <form className='mx-[20%] md:mx-0'>
//                 <label className='flex gap-1'>
//                     <Image src='/person.svg' alt='person' width={20} height={10}/>
//                     <h4>Name</h4>
//                 </label>
//                 <p><input type="text" className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
//                 <label className='flex gap-1 mt-5'>
//                     <Image src='/email.svg' alt='email' width={20} height={10}/>
//                     <h4>Email</h4>
//                 </label>
//                 <p><input type="text" className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
//                 <label className='flex gap-1 mt-5'>
//                     <Image src='/message.svg' alt='message' width={20} height={10}/>
//                     <h4>Message</h4>
//                 </label>
//                 <p><textarea rows={5} cols={30} className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
//                 <Button text='Send Meesage' />
//             </form>
//         </div>
//         <hr className='border-[#06b6d4]'/>
//         <footer className='flex gap-2 items-center justify-center mt-10'>
//             <p><u>©All Rights Reserved</u></p>
//             <Image src='/m.png' alt='linkedin' width={40} height={40} />
//         </footer>
//     </div>
//   )
// }

// export default Contact