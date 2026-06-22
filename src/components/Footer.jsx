import React from 'react'
import { FaStar } from 'react-icons/fa'

const Footer =()=> {

return(
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
)



    }

    export default Footer