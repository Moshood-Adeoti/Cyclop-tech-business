import React from 'react'
import Nav from './Nav'
import { FaArrowRight, FaGlobe, FaHighlighter, FaStar, FaUser, FaUsers } from 'react-icons/fa'
import { FaJetFighterUp } from 'react-icons/fa6'
import { FcDataProtection } from 'react-icons/fc'




const box = [ 

    {icon: <FaHighlighter/>,  name: 'Lightning' , desc : "Experience unparalleled speed and performance with our optimized infrastructure."},
    {icon: <FcDataProtection/>,  name: 'Secure by Design' , desc : "Your data is protected by enterprise-grade security and encryption protocols."},
    {icon: <FaJetFighterUp/>,  name: 'Scale Instantly' , desc : "Grow your business without worrying about technical limitations or bottlenecks."},
]

const box2 =[

    {icon: <FaUsers/>, head: "1k+" ,name: "Active Users"},
    {icon: <FaStar/>, head: "99.9%" ,name: "Uptime"},
    {icon: <FaGlobe/>, head: "50++" ,name: "Countries"}
]
const Home = () => {
  return (

    <div>
        <Nav/>
        <div className='mt-8 px-0 '>

<div className='flex justify-center '>
    <div className=' bg-gradient-to-b from-red-400 to-purple-600  animate-bounce   items-center  mx-8 rounded-xl px-3 py-1   '>
    <h1 className='text-center p-2 px-3 text-white font-semibold    '>New features</h1>
</div></div>


<div className='flex justify-center '>
    <div className='  items-center  mx-8  px-3 py-1   '>
    <h1 className='text-center p-2 px-3 text-black  font-semibold  font-bold md:font-bolder md:mt-8 mt-4   text-4xl md:text-6xl md:items-center md:mx-[20%] '>Build the future with  <span className='bg-gradient-to-r from-purple-400 via-red-500 to-purple-400 bg-clip-text text-transparent animate-pulse  '> limitless power</span> </h1>
</div></div>




<div className='flex justify-center '>
    <div className='  items-center  mx-8  px-3 py-1   '>
    <p className='text-center p-2 px-3 text-black md:mx-[20%] '>  Unleash your team's potential with our cutting-edge platform. Designed for speed, built for scale, and crafted with love.</p>
</div></div>

<div className='flex justify-center items-center gap-6  mt-6 '>

<button className='py-3 px-4 text-center rounded-xl border bg-gradient-to-b from-purple-400 via-red-500 to-purple-400 text-white font-semibold flex gap-4 items-center text-lg animate-pulse'>
  Get Started Now <FaArrowRight />
</button>

<button className='py-3 px-4 text-center rounded-xl border-2 border-red-400 bg-gradient-to-b from-purple-700 via-red-600 to-purple-800 bg-clip-text text-transparent text-lg font-semibold hover:from-purple-500 hover:via-red-400 hover:to-purple-500'>
  <p className='aniamte-pulse '>View Documentation</p>
</button>
</div>

<div className='flex justify-center '>
    <div className='  items-center  mx-2 md:mx-8 px-3 py-1   '>
    <p className='text-center p-2 px-3 text-black  text-2xl md:mt-6 mt-3 md:text-4xl font-semibold  md:xl'>  Everything you need to succeed</p>
</div></div>

<p className='text-center mt-3 md:text-md md:mx-[25%]'> We've built the most comprehensive suite of tools to help you manage, scale, and grow your business.</p>



<div className='flex gap-6  px-4 my-8   justify-center md:flex flex-col  md:flex-row  '>


    

{box.map((ibox, ind) => (

<div key={ind} className='px-2 border-2  py-6  border-red-500  hover:scale-105 transform:transition-transform ease-in-out duration-500 hover:border-purple-300  rounded-xl mx-0 items-center justify-center flex flex-col '>
    
    
    
   <p className='text-3xl text-red-500 mb-6 px-4  '>  {ibox.icon}</p>

<h1 className='text-xl  font-semibold animate-pulse mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-red-600 bg-clip-text text-transparent   '>{ibox.name}</h1>


<p className='mx-6 items-center  my-3 md:text-md text-[16px]  '>{ibox.desc}</p>

</div>

))}




</div>




<div className='py-8 bg-gradient-to-r from-red-400 via-purple-400 to-red-500'>

  <div className='flex flex-col md:flex-row justify-center mx-8 '>

    {box2.map((dflex, inde) => (
      <div className='px-8 w-full justify-center flex flex-col mx-6 items-center gap-4   ' key={inde}>
        <p className='p-4 text-white text-3xl  '>{dflex.icon}</p>

        <p className='text-3xl font-bold text-white mb-6 '>{dflex.head}</p>


        <p className='text-xl font-normal text-white mb-6 mt-[-20px]'>{dflex.name}</p>
      </div>
    ))}

  </div>

</div>



<div className='flex flex-col gap-3 justify-center items-center bg-gray-800 '>

<div className='flex gap-4  justify-center items-center py-3 px-4  mt-8'>

    <FaStar className='text-3xl text-white text-yellow-600 animate-pulse '/>
    <p className='bg-gradient-to-r from-red-600 via-purple-500 to-red-800 text-center bg-clip-text text-transparent text-3xl    font-bold animate-pulse ' > Cyclop-Tech</p>
    
    
    </div>


<p className='text-white text-md mb-4 '>© 2026 Brand Inc. All rights reserved. </p>


<div className='flex gap-4 '> <p className='text-white text-lg mb-8 hover:bg-gradient-to-b hover:from-red-500 hover:via-purple-400 hover:to-red-600 hover:bg-clip-text hover:text-transparent '>Privacy Policy</p>
<p className='text-white text-lg hover:bg-gradient-to-b hover:from-red-500 hover:via-purple-400 hover:to-red-600 hover:bg-clip-text hover:text-transparent '>Terms of Service</p>
<p className='text-white text-lg hover:bg-gradient-to-b hover:from-red-500 hover:via-purple-400 hover:to-red-600 hover:bg-clip-text hover:text-transparent'>Contact</p>
</div>
</div>






    </div></div>



    
  )
}

export default Home