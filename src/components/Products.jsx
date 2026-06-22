import React from 'react'
import Nav from './Nav'
import { BsArrowRight, BsFillTrainLightrailFrontFill, BsThunderbolt } from 'react-icons/bs'
import { FaArrowRight, FaDatabase, FaMicrochip, FaPlay, FaRegCheckCircle } from 'react-icons/fa'
import { FcDataProtection } from 'react-icons/fc'
import { FaShield, FaShieldCat, FaShieldHalved } from 'react-icons/fa6'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import Footer from './Footer'







const images={
    ultimate1: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqhqMEKqqI0S8HhW5TiZ7IUJAEqHLWiU-LD5YEy2eOOQQtoIxwU6SY1Y&s=10",
    intelligent2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXd7ex6isEo_T4WAO3ELyZkGa2DssJKcDYig&s",
    realtime3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwLLEXLUFS9DzmQyaKFIvP7VvyaYnUtL5Stw5F-zR5A&s=10",
    enterprise4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptmik2ZtT1YzB5GBFsOHioK_pCW4oTvDQ-s1h7xKrkg&s=10",
}



const features ={
intelFeat : [
 " Smart routing",
 " Automated triggers",
 " Custom logic builder"
],


  realfeat : [
    "Live editing",
    "Contextual threads",
    "version Hitory"
  ],

EnterFeat : [
"End-to-end encryption",
"SSO Integration",
"Audit logging",

]

}



 

const ultimateSec = {
 head: ` The ultimate platform for `,
 colored: "Modern teams",
ads: "Streamline your workflow, boost productivity, and scale your operations with our all-in-one product suite.",
but1: "Start a free trial",
iconarRight: <BsArrowRight/>,
but2: "Watch Demo",
playDemo: <FaPlay/>,
image:images.ultimate1


}


const intelligentAct= {
 head: "Intelligent Automation",
ads: "Automate your most complex workflows with our AI-driven engine. Reduce manual tasks by up to 80% and let your team focus on what truly matters.",
image: images.intelligent2,
icon: <FaMicrochip className='text-red-400 text-3xl '/>,
merit: features.intelFeat 



}

const RealTimeColla= {
head: "Real Time Collaboration",
ads: "Working together seamlessly across timw zones. See changes instantly, comment in context, and never losw track of project progress again.",
image: images.realtime3,
icon: <FaDatabase className='text-red-400 text-3xl md:text-5xl'/>,
merit: features.realfeat

}

const EnterSecur = {
  head: "Enterprise Security",
  ads:  "Bank-grade security built into every layer. Your data is encrypted at rest and in transit, with granular access controls for your entire organization.",
  images: images.enterprise4,
  icon: <FaShieldHalved className='text-red-500 text-3xl'/>,
  merit: features.EnterFeat

}


const text_gradient = "bg-gradient-to-r from-purple-400 via-red-500 to-purple-400 bg-clip-text text-transparent animate-pulse"

const bg_gradient = "bg-gradient-to-b from-purple-400 via-red-500 to-purple-400"



const Products = () => {
  return (
    <div>  
<Nav/>

<h1 className='text-center mb-12  ' > </h1> 


<div className='flex flex-col md:flex-row gap-[70px] px-8   justify-center  mx-[10%] md:mx-8'>

<div className='flex flex-col gap-4 justify-center items-center'>
  <h1 className='text-3xl md:text-5xl font-bold mx-[10%] md:mx-4 mt-8 text-center md:text-left '>
 {ultimateSec.head} <span className={text_gradient}>{ ultimateSec.colored}</span>
  </h1>

  <p className='text-center text-lg md:text-left mx-4 mt-6  '> {ultimateSec.ads}</p>

  <div className='flex flex-col md:flex-row justify-center gap-6 w-full md:justify-start mt-8  '>

    <button className={`py-3 px-6 text-center rounded-xl border ${bg_gradient} text-white font-semibold  items-center text-lg animate-pulse flex gap-4 justify-center md:mx-4 `}>{ultimateSec.but1} <FaArrowRight/> </button>
    <button className={`py-4 px-6 border-2  rounded-xl border-purple-500 font-semibold text-purple-500 hover:${bg_gradient} hover:text-white flex gap-4 justify-center items-center `}> <FaPlay  className='text-xl '/> {ultimateSec.but2}</button>

  </div>

</div>


<div><img src={images.ultimate1} alt="The ultimate platform for Modern teams"  className='mt-8 hover:border-red-500 border-2 rounded-xl transform:transition-transform hover:scale-105 ease-in-out duration-500 mb-6 '/> </div>
</div>

<h1 className='text-center text-3xl md:text-5xl font-bold mt-8 mb-6 '>Built for performance</h1>
<p className="text-center text-md mb-8 "> Everything you need to manage your work, all in one beautifully designed platform.</p>


<div className="flex flex-col md:flex-row gap-12 px-8  py-6 mt-4  justify-center items-center mx-2/10 md:mx-8 w-min-screen h-min-screen">

<div className='flex flex-col   gap-6 px-2'>
<p className="px-3">{intelligentAct.icon}</p>


<p className='text-3xl px-3 font-semibold md:font-bold  md:text-5xl text-left mb-4  '> {intelligentAct.head}</p>

<p className='text-left px-3 text-lg pb-4  '>{intelligentAct.ads}</p>
 

 <div className='flex flex-col gap-4  mb-6 '>

  
{features.intelFeat.map((index) => (
<ul key={index} className='flex  items-center gap-4   '>
<p><FaRegCheckCircle className='text-2xl text-red-400  '/></p>
<li className='text-lg '>{index}</li>
</ul>


))}


 </div>


</div>

<div className=' transform:transition-transform hover:scale-105 ease-in-out
duration-500 flex flex-col w-full  rounded-xl hover:border-red-400 border-2    items-center  mb-4     md:min-w-[45%] md:h-[20%] md:max-h-[40%]  md:mt-6 '><img src={intelligentAct.image}  alt="Intelligent Automation" className=' rounded-xl items-center w-full  h-full ' /></div>
</div>



<div className='flex flex-col md:flex-row gap-12 px-8 py-6 mt-4  justify-center items-center mx-2/10 md:mx-8 w-min-screen h-min-screen"'>

<div className=' transform:transition-transform hover:scale-105 ease-in-out
duration-500 flex flex-col w-full  rounded-xl hover:border-red-400 border-2    items-center  mb-4     md:min-w-[45%] md:h-[20%] md:max-h-[40%]  md:mt-6 '><img src={images.realtime3}  alt="Real-time Collaboration" className=' rounded-xl items-center w-full  h-full ' /></div>


<div className='flex flex-col   gap-6 px-2'>
<p className="px-3">{ RealTimeColla.icon}</p>


<p className='text-3xl px-3 font-semibold   md:text-4xl text-left mb-4  '> {RealTimeColla.head}</p>

<p className='text-left px-3 text-lg pb-4  '>{RealTimeColla.ads}</p>
 

 <div className='flex flex-col gap-4  mb-6 '>

  
{features.realfeat.map((index) => (
<ul key={index} className='flex  items-center gap-4   '>
<p><FaRegCheckCircle className='text-2xl text-red-400  '/></p>
<li className='text-lg '>{index}</li>
</ul>


))}


 </div>


</div>



</div>






<div className="flex flex-col md:flex-row gap-12 px-8  py-6 mt-4    justify-center items-center mx-2/10 md:mx-8 w-min-screen h-min-screen">

<div className='flex flex-col   gap-6 px-2'>
<p className="px-3">{EnterSecur.icon}</p>


<p className='text-3xl px-3 font-semibold md:font-bold  md:text-5xl text-left mb-4  '> {EnterSecur.head}</p>

<p className='text-left px-3 text-lg pb-4  '>{EnterSecur.ads}</p>
 

 <div className='flex flex-col gap-4  mb-6 '>

  
{features.EnterFeat.map((index) => (
<ul key={index} className='flex  items-center gap-4   '>
<p><FaRegCheckCircle className='text-2xl text-red-400  '/></p>
<li className='text-lg '>{index}</li>
</ul>


))}


 </div>


</div>

<div className=' transform:transition-transform hover:scale-105 ease-in-out
duration-500 flex flex-col w-full  rounded-xl hover:border-red-400 border-2    items-center  mb-4 
    md:min-w-[45%] md:h-[20%] md:max-h-[40%]  md:mt-6 '><img src={images.enterprise4}  alt="Enterprise Security" className=' rounded-xl items-center w-full  h-full ' /></div>
</div>


<div className='flex flex-col gap-3 bg-gray-900 py-6 '>

<h1 className='text-3xl text-center md:text-5xl font-semibold text-white px-4 my-4   '>Integrates with your favorite tools</h1>
<div className='p-2  flex gap-6 mx-4  justify-center  items-center  '> 
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>
<AiOutlineThunderbolt className='px-4  rounded-full animate-pulse  border border-white py-2    text-white text-7xl '/>


</div> 

</div>

<Footer/>

    </div>
  )
}

export default Products