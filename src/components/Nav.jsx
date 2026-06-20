import React, { useState } from 'react'
import { AiFillFastBackward } from 'react-icons/ai'
import { FaArrowCircleLeft, FaBackspace, FaBackward, FaBars, FaKey } from 'react-icons/fa'
import { Link } from 'react-router'


const style = {

  li: "font-semibold border border-purple-400 bg-white rounded-lg text-center px-4 py-2 flex items-center text-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-red-400 hover:to-purple-400 hover:text-white transition-all duration-300"
}




const links = [  "Home", "Services", "Product", " Help Center" ,"FAQs" , "Explore" ]

const Nav = () => {
  const [IsmenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div> 

<nav className='bg-gradient-to-r from-purple-400 via-red-400 to-purple-400 p-2 pl-6 pr-8     flex gap-6 justify-center items-center  '>  



   
  <ul className='hidden md:flex gap-4 lg:gap-8 text-white text-sm lg:text-md flex-1 justify-center flex-wrap'> 
  

  {links.map((link) => (
 <li key={link} className={style.li}> {link}   </li>

  ))}
</ul> 


<Link to={"/"} 
className='text-center animate-pulse py-2 bg-gradient-to-b from-red-300 via-purple-500 to-red-500 px-3  mr-12   rounded-lg  flex gap-2 text-white text-md   justify-center items-center font-semibold  '> <FaArrowCircleLeft className='text-white text-3xl mr-4  '/> <p> Log Out</p> </Link>
 
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

{links.map((i) => (

  <li key={i} className={style.li}> {i} </li>
))}

</ul>


  </div>
 ) }






    </div>
  )
}

export default Nav