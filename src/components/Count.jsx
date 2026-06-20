import React, { useState } from 'react'
import { FaAlignLeft, FaArrowCircleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import Nav from './Nav'
const Count = () => {


    const [count, setCount] = useState(0)

    const increment = ()=>{

        setCount(count+1)
    }


    const decrease =()=>{

        setCount(count-1)
    }

    const reset =()=>{
setCount(0)
    }

 
  return (
    
    <div>

        <Nav/>
     <h1  className='text-center text-black mb-4 mt-8  text-xl font-bold'>
    The Counter 
</h1>   
<div className='flex justify-center  items-center '>
    
 

<p className='text-center font-semibold text-red-400 bg-green-200 w-40 p-2 border border-red-400 rounded-lg'>Count is : {count}</p>
</div>


<div className='flex flex-col gap-4    justify-center  p-8 mx-[25%]'>

<button className='text-center py-3 rounded-lg hover:bg-green-500 hover:text-white hover:border-2 hover:border-gray-400 border border-green-400 font-semibold px-3 text-green-400 bg-white' onClick={increment}> Increase</button>
<button className='text-center py-3 rounded-lg hover:bg-green-500 hover:text-white hover:border-2 hover:border-gray-400 border border-green-400 font-semibold px-3 text-green-400 bg-white' onClick={decrease}>Decrease</button>
<button className='text-center py-3 rounded-lg hover:bg-green-500 mb-6  hover:text-white hover:border-2 hover:border-gray-400 border border-green-400 font-semibold px-3 text-green-400 bg-white' onClick={reset}>Reset</button>


 
</div>




    </div>



  )
}

export default Count