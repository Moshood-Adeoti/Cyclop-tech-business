import React, { useState } from 'react'
import { AiFillFastBackward } from 'react-icons/ai'
import { FaArrowCircleLeft, FaBackspace, FaBackward, FaBars, FaKey } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { AllPaths } from './Path'


const style = {

  li: "font-semibold border border-purple-400 bg-white rounded-lg text-center px-4 py-2 flex items-center text-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-400 hover:to-purple-400 hover:text-white transition-all duration-300"
}




const links = [
     {Name: "Home" , path:  AllPaths.home, }, 
     {Name : "Services", path: AllPaths.services}, 
     {Name: "Products" , path: AllPaths.Products}, 
     {Name: "Help Center", path: AllPaths.Help_Center}, 
     {Name: "FAQS", path: AllPaths.FAQs}, 
     {Name: "Explore", path: AllPaths.Explore},  
]
  

const Nav = () => {
  const [IsmenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div> 

<nav className='bg-gradient-to-r from-purple-400 via-red-400 to-purple-400 p-2 pl-6 pr-8     flex gap-6 justify-center items-center  '>  



   
  <ul className='hidden md:flex gap-4 lg:gap-8 text-white text-sm lg:text-md flex-1 justify-center flex-wrap'> 
  

  {links.map((link,  id) => (
 <Link key={id} className={style.li} to={link.path}> {link.Name }   </Link>

  ))}
</ul> 


<button to={"/"} onClick={() => {
    const confirmed = window.confirm("Are you sure you want to log out?")
    if (confirmed) {
      
      window.location.href = "/"
    }
  }}
className='text-center animate-pulse py-2 bg-gradient-to-b from-red-300 via-purple-500 to-red-500 px-3  mr-12   rounded-lg  flex gap-2 text-white text-md   justify-center items-center font-semibold  '> <FaArrowCircleLeft className='text-white text-3xl mr-4  '/> <p> Log Out</p> </button>
 
 <button 

className='md:hidden text-3xl text-white  font-semibold z-20 ml-auto '
aria-label='Toggle Menu'
onClick={()=> setIsMenuOpen(!IsmenuOpen)}> 



{IsmenuOpen ?  (
  <p className='text-[17px]  animate-pulse mx-2  py-1 px-2 bg-gradient-to-b from-red-400 via-purple-500 to-red-400'>Minimize</p>
 ): <FaBars/>}
 </button>
 

  </nav>


 {IsmenuOpen && ( 

  <div className='bg-gradient-to-r from-red-400 via-purple-400 to-red-400 mx-4 rounded-lg p-4 my-6  '>

<ul className='flex flex-col gap-4  tetx-white text-md'>

{links.map((link, index) => (

  <Link key={index} className={style.li} to={link.path}> {link.Name} </Link>
))}

</ul>


  </div>
 ) }






    </div>
  )
}

export default Nav