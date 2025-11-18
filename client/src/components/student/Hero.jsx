import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from '../../components/student/SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36
    pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
       <h1 className='md:text-home-heading-large text-home-heading-small 
       relative font-bold text-gray-800 max-w-3xl mx-auto'><i>SkillScape</i> is where curiosity meets opportunity.
        <span className='text-blue-600'> Master every skill.</span>
        <img src={assets.sketch} alt="sketch"
         className='md:block hidden absolute -bottom-7 right-0'/></h1> 

         <p className='md:block hidden text-gray-500  max-w-2xl mx-auto'>
          a space built to upskill, reskill, 
          and unlock potential through smart, personalized learning experiences.
         </p>

         <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
          a space built to upskill, reskill, 
          and unlock potential through smart, personalized learning experiences.
         </p>

         <SearchBar />


    </div>
  )
}

export default Hero