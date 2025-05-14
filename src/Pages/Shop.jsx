import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import MainSlider from '../Component/MainSlider'
import BookCategory from '../Component/BookCategory'
import NewProduct from '../Component/NewProduct'

function Shop() {
  return (
    <div>
      <Navbar/>
      <MainSlider/> 
      <div className='flex w-full '>
        <div className='w-3/12 bg-[#F5F6F8] '>
          <BookCategory />
        </div>
        <div className='w-9/12'>
          <NewProduct />
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Shop
