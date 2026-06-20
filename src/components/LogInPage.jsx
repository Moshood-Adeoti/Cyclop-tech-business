 import React, { useState } from 'react'
import { FaKey } from 'react-icons/fa'
import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'
 
 


 

 const Style = {
input: "bg-white border-2 border-purple-500 mx-4 my-3 relative  rounded-lg px-8 py-2 w-[60vw] placeholder-gray-400  "

 }
 const LogInPage = () => {
  const [auth, setAuth] = useState("Sign In") 

   
   return (
     <div className='h-screen  p-8   bg-gradient-to-b from-purple-500 via-red-400 to-purple-900   flex items-center justify-center  pb-16  '> 

 { auth === 'Sign In' ? 
 (<SignInPage  onSwitch={() => setAuth("Sign Up")} /> ) :
  (<SignUpPage  onSwitch={() => setAuth("Sign In")} /> )}


 

 
</div>
   
   )
 }
 
 export default LogInPage 