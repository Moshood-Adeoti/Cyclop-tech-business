import React from 'react'
import Nav from './Nav'
import { FaChartBar, FaCloud, FaCode, FaDatabase, FaLock, FaMobile, FaRegCheckCircle } from 'react-icons/fa'
import Footer from './Footer'


const iconStyle = "text-5xl text-red-400 hover:text-white "

const gridBox = [

 {icon: <FaCloud className={iconStyle}/>, name: "Cloud Infrastructure", desc: " Scalable, secure, and highly available cloud hosting solutions tailored to your specific enterprise needs." , 
     ads: [" Auto-scaling clusters ",  " 99.99% uptime SLA",  " Global CDN integration"] }, 

 {icon: <FaDatabase className={iconStyle} />, name: "Data Management",
 desc: "Comprehensive data pipelines, warehousing, and analytics to turn your raw data into actionable insights." , 
  ads: [" Real-time processing ",  " Autoated BackUps ", " Data Goverance"] }, 

 
 {icon: <FaLock className={iconStyle} />, name: "Cyber Security", desc: "Enterprise-grade security protocols to protect your sensitive data from emerging digital threats."
   ,  ads: [" 24/7 Threat monitoring", "Penetration Testing ", " Compliqnce Auditing"] },




 {icon: <FaMobile className={iconStyle}/>, name: "Mobile Development", 
  desc: "Native and cross-platform mobile applications that deliver exceptional user experiences." ,
    ads: ["iOS & Android ", " Offline capabilities", " Push Notifications"] }, 


 {icon: <FaCode className={iconStyle}/>, name: "Custom Software", desc: "Bespoke software solutions designed specifically for your unique business workflows and challenges." ,
    ads: [" API development ", "Legacy modernization ", "Microservices architecture "] }, 
 
 
 {icon: <FaChartBar className={iconStyle}/>, name: "Business Intelligence", desc: "Advanced dashboards and reporting tools that give you a clear view of your business performance." ,

    ads: ["Custom dashboards", "Automated reporting ", "Predictive Analytics"] }, 

]

const Services = () => {
  return (
    <div> 
 <Nav/>

 <div className='flex flex-col gap-4 justify-center mt-6   '>

<h1 className='text-3xl md:text-5xl text-center font-bold mx-[20%] md:mx-[30%]'>
Solutions that drive <span className='animate-pulse bg-gradient-to-r from-purple-400 via-red-400 to-purple-600 bg-clip-text text-transparent'> real growth</span> 
</h1>
<p className='text-lg text-center mx-8 md:mx-[17%] mt-6 '>From cloud infrastructure to custom software development, we provide end-to-end services to help your business thrive in the digital age.</p>

 </div>



 <div className='md:grid md:grid-cols-3  flex flex-col items-center  justify-center md:grid-rows-2 gap-4  md:gap-6  p-5 mt-4 md:mt-8  '>
  {gridBox.map((grid, index) => (
    <div key={index} className='px-4 bg-gray-100  px-4 rounded-lg border-2 border-white hover:border-purple-600 transform:transition-transform hover:scale-105 duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-500 hover:to-purple-400 hover:bg-clip-text hover:text-transparent '>
      <p className='py-4 mb-6  text-center px-3  hover:scale-105 duration-500  w-[20%] rounded-lg mt-4 shadow-md hover-shadow-xl hover:bg-gradient-to-r from-purple-400 via-red-500 to-purple-400  animate-pulse '>{grid.icon}</p>

      <h1 className='p-4 text-xl md:text-2xl md:font-semibold font-semibold mb-4  '>{grid.name}</h1>

      <p className='pl-4  text-lg  mb-8 text-black '>{grid.desc}</p>


   <ul className='flex flex-col gap-3 mx-8 mb-4 '>

{
  grid.ads.map((index) => (

<div key={index} className='flex gap-3 items-center '>


<FaRegCheckCircle className='text-green-400 text-xl ' />
  <li className='text-black '>{index}</li>
</div>

  ))
}
  </ul>


    </div>
  ))}
</div>


<div className='mx-[10%] pl-[5%] py-8  pr-[2%]  my-8  rounded-lg bg-gradient-to-r from-purple-400 via-red-500 to-purple-500 '>
<div className='flex gap-4 flex-col md:flex-row  items-center justify-center'>

<div className='flex flex-col gap-4 md:flex-col   '>
  <p className='text-white text-xl md:text-3xl font-semibold md:font-bold'>Ready to transform your business?</p>

<p className='text-white text-lg md:text-lg  mt-6 '>Let's discuss how our services can help you achieve your goals faster and more efficiently.</p>
</div>

<button className='py-4 md:py-4 bg-white text-center rounded-lg text-md  px-4   text-red-400   hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-400 hover:to-purple-400 hover:text-white transition-all duration-300 font-bold   '>
  Get a Proposal
</button>
</div>




</div>

<Footer/>
 
    </div>
  )
}

export default Services