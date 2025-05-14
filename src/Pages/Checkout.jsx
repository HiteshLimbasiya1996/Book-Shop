import React from 'react'
// import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import PlainBg from '../Component/PlainBg'
import Checkoutitem from '../Component/Checkoutitem'
import CheckProducts from '../Component/CheckProducts'

function Checkout() {
  return (
    <div>
      <PlainBg />
      <div className='bg-[#F5F6F8] w-full gap-4 flex'>
        
         <div className='w-[57%]'>
          <Checkoutitem />
        </div>
        <div className='w-[35%]'>
           <CheckProducts />
        </div>
       
      </div>

      
      <Footer />
    </div>
  )
}

export default Checkout
