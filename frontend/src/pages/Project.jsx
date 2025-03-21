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
          <p className='mt-2 text-white bg-[#2e3038]'>Bookify is a MERN-based book management app that helps users 
            organize their book collections seamlessly. Built with MongoDB Compass and React.js, it allows users to add, 
            update, and delete books dynamically.</p>
        </div>

        {/* PROJECT-5 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.BedApp} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Bed App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>A MERN-based hospital management app streamlines bed 
            allocation by displaying available beds in real-time. It allows staff to assign patients to specific 
            rooms and beds, ensuring efficient hospital management.</p>
        </div>

        {/* PROJECT-6 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.WeatherApp} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Weather App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>WeatherNow is a React-based weather app that fetches real-time 
            weather data using a Weather API. Styled with Tailwind CSS, it provides users with current conditions, hourly 
            and daily forecasts, and location-based weather updates.</p>
        </div>
      </div>
      
      <div className='flex mt-10 pt-10 justify-between mb-[100px]'>
        {/* PROJECT-4 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.AuthProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Email Auth</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The MERN Email Authentication project implements user registration, login, and 
            authentication using JWT, bcrypt, and MongoDB. It includes secure password hashing, token-based authentication, and protected 
            routes for user access control.</p>
        </div>

        {/* PROJECT-5 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.Porsche} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Porsche FM</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The Porsche web app, built with Framer Motion, delivers a dynamic user experience 
            with smooth animations, interactive car showcases, and seamless transitions, enhancing engagement and visual appeal for an immersive 
            browsing experience.</p>
        </div>

        {/* PROJECT-6 */}
        <div className='w-[400px] p-5 h-[500px] bg-[#2e3038] rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-[#454754]'>
          <img className='scale-95 rounded-lg bg-white' src={assets.HospitalProject} alt="" />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Medicare</h3>
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]' >Summary </h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The MERN Hospital Management System manages patient admissions, bed allocations, 
            and records. It ensures efficient room management, tracks patient details, and updates availability dynamically for streamlined 
            hospital operations.</p>
        </div>
      </div>
    </div>
  )
}

export default Project