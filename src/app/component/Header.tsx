

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    
    <header className='bg-yellow-400'>
    <div className='container max-auto flex justify-between items-center'>
      <h1 className='text-3xl font-b0ld'>Header</h1>
      
        <nav>
     
    <ul className='flex space-x-6 mr-4 cursor-pointer'>
    <li><Link className='hover:text-blue-700'  href= "/">Home</Link></li>
    <li><Link className='hover:text-green-400'  href= "/">About</Link></li>
    <li><Link className='hover:text-pink-800' href= "/">Skills</Link></li>
    <li><Link className='hover:text-amber-700' href= "/">Contact</Link></li>

    </ul>
  
  </nav>
  </div>
  </header>
  
  
  )
}

export default Header