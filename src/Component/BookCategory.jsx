import React from 'react'

function BookCategory() {
  return (
    <div className='bg-[#F5F6F8]'>
      <div className='text-black px-2 py-[70px]'>
        <h1 className='text-[25px] pl-12 font-bold'>Book by Genre</h1>
        <ul className='mt-3 text-lg'>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>All Genres</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Business</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Science</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Fiction</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Philosophy</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Biography</li>
            
        </ul>
      </div>
      <div className='text-black px-2 pb-5'>
        <h1 className='text-[25px] pl-12 font-bold'>Recomendations</h1>
        <ul className='mt-3 text-lg'>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Artist of the Month</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Book of the Year</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Top Genre</li>
            <li className='hover:bg-white hover:text-[#FF971D] py-1 pl-12 rounded-[2px]'>Trending</li>
            
        </ul>
      </div>
    </div>
  )
}

export default BookCategory
