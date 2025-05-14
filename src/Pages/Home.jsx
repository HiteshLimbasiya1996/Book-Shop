import React from 'react'
import Navbar from '../Component/Navbar'
import MainSlider from '../Component/MainSlider'
import BookCategory from '../Component/BookCategory'
import BookProducts from '../Component/BookProducts'
import Footer from '../Component/Footer'


function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>        
        <MainSlider />
      </div>
      <div className='flex w-full bg-[#F5F6F8]'>
        <div className='w-3/12'>
          <BookCategory />
        </div>
        <div className='w-9/12'>
          <BookProducts />
        </div>

      </div>
      {/* <h1>This is a Home page</h1>  */}
      <Footer/>
    </div>
  )
}

export default Home
