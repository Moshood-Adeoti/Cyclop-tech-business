import React from 'react'
import { useNavigate } from 'react-router'



const Style = {
input: "bg-white border border-purple-500 mx-4 my-3 relative  rounded-lg px-8 py-2   placeholder-gray-400  "

 }
const SignInPage = ({onSwitch}) => {
  const navigate = useNavigate()
  return (
    <div> 
       <form onSubmit={e => {e.preventDefault()
        navigate("/Home")}
       } className='bg-white flex flex-col   justify-center items-center rounded-lg p-6    '>
<div className='w-[40% ] flex flex-col justify-center items-center '>
  <p className='text-xl my-4 mx-4 font-bold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent  mb-[10px]'>Sign in here</p>
<div className='w-[40%] bg-gradient-to-r from-purple-500 via-red-500 to-purple-400   h-2 rounded-lg'></div>
</div>


 


<div className='flex flex-col gap-2 '>
  <label className='mx-3.5  font-semibold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent  text-[16px]' > Email</label>
<input type="email" placeholder="cyclop-tech@gmail.com " required className={ Style.input} /></div>

 

<div className='flex flex-col gap-2 '>

  <label className='mx-3.5  font-semibold bnpm run devg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent text-[16px]'> Password </label>
   
<input type="password" placeholder="Enter your password " required  className={ Style.input} />
</div>
<div className='flex gap-4 '>
  <button  type='button' onClick={onSwitch}  className='py-2 px-8 rounded-xl   bg-white border border-purple-500 bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent border-red-500   hover:text-red-500   text-md  hover:text-red-400 hover:bg-red-200 '>Sign Up</button>
  <button type='submit' className='py-2 px-8 rounded-xl bg-purple-500 text-md   text-white hover:bg-purple-200 hover:text-white  hover:border-purple-500 border bg-gradient-to-r from-purple-500 via-red-500 to-purple-400  '>Sign In</button>
</div>
 
 <p className='mt-4 text-lg '>Don't have an account? <span onClick={onSwitch} className='bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent font-bold text-sm '>Sign Up</span></p>

</form></div>
  )
}

export default SignInPage