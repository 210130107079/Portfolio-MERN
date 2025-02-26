import React from 'react'
import {assets} from'../assets/assets.js'

const Project = () => {
  return (
    <div>
      <div className='text-5xl text-[#FFEB00] font-bold flex text-center justify-center mt-10'>
        <img className='w-11 h-11 mr-3' src={assets.Project} alt="" />PROJECTS</div>

      <div className='flex mt-10 pt-10 justify-between mb-20'>
        {/* PROJECT-1 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.WorkoutProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Workout Buddy</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>This MERN-based Workout Buddy app helps users log exercises with weight and reps, 
            displaying them dynamically. Users can add and delete workouts, making fitness 
            tracking seamless and efficient with a user-friendly interface.</p>
        </div>

        <div className='h-auto border-l-2 border-white rounded-md'></div>

        {/* PROJECT-2 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.EcommerceProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[200px]'>TITLE : E-Commerce </h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>Clothify is a sleek e-commerce website for 
            trendy fashion. It showcases the latest arrivals with premium fabrics and stylish designs. 
            Users can browse collections, shop easily, and enjoy a seamless shopping experience.</p>
        </div>

        <div className='h-auto border-l-2 border-white rounded-md'></div>

        {/* PROJECT-3 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.ChatProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[270px]'>TITLE : Real Time Chat App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>Chatty is a real-time chat application with a sleek dark theme. 
            It features secure login, user authentication, and instant messaging. Users can create accounts, sign in, 
            and continue conversations seamlessly.</p>
        </div>
      </div>

      <hr className='rounded-md border-[1px]' />


      <div className='flex mt-10 pt-10 justify-between mb-[100px]'>
        {/* PROJECT-4 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.BookifyProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Bookify</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>This MERN-based Workout Buddy app helps users log exercises with weight and reps, 
            displaying them dynamically. Users can add and delete workouts, making fitness 
            tracking seamless and efficient with a user-friendly interface.</p>
        </div>
      </div>
    </div>
  )
}

export default Project