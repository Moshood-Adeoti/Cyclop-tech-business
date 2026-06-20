import React from 'react'

const Style = {
input: "bg-white border  border-purple-500 mx-4 my-2 relative  rounded-lg px-8 py-2   placeholder-gray-400  "

 }

const SignUpPage = ({onSwitch}) => {
  return (
    <div className='mt-6'> 



        <form onSubmit={ e => e.preventDefault()} className='bg-white flex flex-col justify-center items-center rounded-lg p-4 pt-0 '>
<div className='w-40%  flex flex-col justify-center items-center  '>
  <p className='text-xl my-4 mx-4 font-bold text-purple-600 mb-[10px] bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent '>Sign Up here</p>
<div className='w-[40%] bg-gradient-to-b from-purple-500 via-red-300 to-purple-900 to-purple-800 h-2 rounded-lg'></div>
</div>


<div className='flex flex-col gap-1 px-3 '>
  <label className=' mx-3.5  font-semibold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent text-[14px]'> Full name </label>
<input type="text" placeholder="Enter your full name" required  className={ Style.input} />
</div>


<div className='flex flex-col gap-1 '>
  <label className='mx-3.5  font-semibold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent text-[14px]' > Email</label>
<input type="email" placeholder="cyclop-tech@gmail.com " required  className={ Style.input} /></div>

<div className='flex flex-col gap-1 '>

  <label className='mx-3.5  font-semibold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent text-[14px]' > Phone Number</label>
<input type="text" placeholder="Enter your Phone number" required  className={ Style.input} />

</div>

<div className='flex flex-col gap-1 '>

  <label className='mx-3.5  font-semibold bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent text-[14px]'> Password </label>
   
<input type="password" placeholder="Create Password " required  className={ Style.input} />
</div>
<div className='flex gap-4'>
  <button type='submit' className='py-3 px-8 rounded-xl bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 text-md text-white hover:bg-white  hover:text-white  hover:border-purple-500 border'>Sign Up</button>
  <button type='button' onClick={onSwitch} className='py-3 px-8 rounded-xl bg-white border border-purple-500   bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent    hover:text-red-500 hover:bg-red-400 '>Sign In</button>
</div>
 
 <p className='mt-4 text-[15px] '>Already have an account? <span onClick={onSwitch} className='bg-gradient-to-r from-purple-500 via-red-500 to-purple-400 bg-clip-text text-transparent  font-bold text-sm '>Sign in</span></p>

</form>
    </div>
  )
}

export default SignUpPage