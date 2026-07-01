import React from 'react'
import Nav from '../components/Nav'
import { FaQuestion } from 'react-icons/fa'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

const FAQs = () => {
  return (
    <div>
        <Nav/>

<div className='mt-6'>

<div className='flex items-center flex-col mx-[45%] rounded-[50%] px-2 py-4 hover:scale-105 border-2 shadow-lg  '><FaQuestion className='text-red-500'/></div>


 <div className='flex flex-col justify-center  px-3 '>
         <h1 className=' text-center p-2 px-3 text-black  font-semibold  font-bold md:font-bolder md:mt-8 mt-4   text-4xl md:text-6xl md:items-center md:mx-[20%] '> Frequently Asked  <span className='bg-gradient-to-r from-purple-400 via-red-500 to-purple-400 bg-clip-text text-transparent animate-pulse  '> Questions</span> </h1>
    <p className='text-center'>Find Quick answers to the most common questions about our platform and services</p>
 </div>

 <Accordion/>

 <Footer/>




 

</div>

        


 
    </div>
  )
}

export default FAQs