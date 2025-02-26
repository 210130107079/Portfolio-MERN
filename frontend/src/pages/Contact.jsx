import React, { useState } from 'react'
import ContactLogo from '../assets/Contact.json'
import Lottie from "lottie-react";
import {assets} from '../assets/assets.js'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = "service_oi8rvmm"
    const templateId = "template_qq1tzd2"
    const publicKey = "Zr73TqcotdHs3aPN1"

    const templateParam = {
      from_name:name,
      from_email:email,
      to_name:"Soham Tarabada",
      message:message
    }

    emailjs.send(serviceId, templateId, templateParam, publicKey)
    .then((response)=>{
      console.log("Emails sent Successfully !",response);
      setName('')
      setEmail('')
      setMessage('')  
    })
    .catch((error)=>{
      console.error("Error sending emails!", error);
    })

  }

  return (
    <div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        {/* ANIMATION */}
        <Lottie className="w-1/3 h-1/3 mt-10 mr-20" animationData={ContactLogo} loop={true}/>

        <div className='flex flex-col justify-center items-center gap-5 mb-5'>
          <h1 className='text-5xl text-[#FFEB00] flex font-bold text-center mt-10'>
            <img className='w-[55px] h-12 mr-7 justify-center items-center align-middle' src={assets.Mail} alt=""/>Contact Me</h1>
            <hr className='opacity-0' />


            <div className='w-full space-y-4'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                <label className='text-[#FFEB00] font-medium'>NAME</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-4 py-2 text-white rounded-md bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-yellow-400' type="text" placeholder='name...' />
                
                <label className='text-[#FFEB00] font-medium mt-2'>E-MAIL</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-150 px-4 py-2 text-white rounded-md bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-yellow-400' type="email" placeholder='email...' />

                <label className='text-[#FFEB00] font-medium mt-2'>MESSAGE</label>
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className='w-150 h-[150px] px-4 py-2 text-white rounded-md  bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-yellow-400'placeholder='message...'/>

                <div className='items-center text-center'>
                <button className='scale-90 text-[#FFEB00] transition-all duration-300 hover:scale-125 hover:text-[#1b1c21] hover:bg-[#FFEB00] mt-4 w-[100px] text-xl rounded-sm px-2 py-1'>SEND</button>
                </div>

              </form>
            </div>

        </div>
        

      </div>
    </div>
  )
}

export default Contact