import React from 'react'
import logo from "../assets/images/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
    <div className='bg-[#FF971D1A] px-[80px] pt-[80px] pb-[50px] gap-5 flex'>
      <div className='w-[25%]'>
        <img src={logo} alt="" className=' w-[151px]' />
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus soluta dicta numquam eaque.</p>
        <div className='flex gap-4 text-[25px] mt-4'>
          <FaFacebookF className=' hover:text-[#FF971D]' />
          <FaXTwitter className=' hover:text-[#FF971D]' />
          <FaInstagram className=' hover:text-[#FF971D]' />
          <FaWhatsapp className=' hover:text-[#FF971D]' />
          <FaLinkedinIn className=' hover:text-[#FF971D]' />
        </div>
      </div>
      <div className='w-[20%]'>
        <h3 className='text-[30px] font-medium'>Links</h3>
        <hr class="w-12 h-1  my-2 bg-[#FF971D] border-0 rounded-sm "></hr>
        
        <ul className='text-black text-[16px] font-medium mt-3'>          
           <NavLink to='/'><li className='mt-2 hover:text-[#FF971D]'>Home</li></NavLink>
           <NavLink to='/about'><li className='mt-2 hover:text-[#FF971D]'>About</li></NavLink>
           <NavLink to='/shop'><li className='mt-2 hover:text-[#FF971D]'>Shop</li></NavLink>
           <NavLink to='/blog'><li className='mt-2 hover:text-[#FF971D]'>Blog</li></NavLink>
           <NavLink to='/contact'><li className='mt-2 hover:text-[#FF971D]'>Contact</li></NavLink>
          
          </ul>
      </div>
      <div className='w-[20%]'>
        <h3 className='text-[30px] font-medium'>Categories</h3>
        <hr class="w-12 h-1  my-2 bg-[#FF971D] border-0 rounded-sm "></hr>
        
        <ul className='text-black text-[16px] font-medium mt-3'>            
           <NavLink ><li className='mt-2 hover:text-[#FF971D] '>Business</li></NavLink>
           <NavLink ><li className='mt-2 hover:text-[#FF971D] '>Science</li></NavLink>
           <NavLink ><li className='mt-2 hover:text-[#FF971D] '>Fiction</li></NavLink>
           <NavLink ><li className='mt-2 hover:text-[#FF971D] '>Philosophy</li></NavLink>
           <NavLink ><li className='mt-2 hover:text-[#FF971D] '>Biography</li></NavLink>       
          </ul>
      </div>
      <div className='w-[25%]'>
        <h3 className='text-[30px] font-medium'>Contacts</h3>
        <hr class="w-12 h-1  my-2 bg-[#FF971D] border-0 rounded-sm "></hr>
        <a href="" className='flex items-center gap-3 mt-3 hover:text-[#FF971D] font-medium'><FaPhoneAlt /> +91 97233 24227 </a>
        <a href="" className='flex items-center gap-3 mt-3 hover:text-[#FF971D] font-medium'><AiOutlineMail /> limbasiyahitesh888@gmail.com </a>
        <a href="" className='flex items-center gap-3 mt-3 hover:text-[#FF971D] font-medium'><FaMapMarkerAlt />Junagadh, Gujarat, India. </a>

      </div>
      </div>
      <div className='bg-[#FF971D1A] px-[80px] py-4 text-center '>
        <hr class="w-full h-1 bg-[#FF971D] border-0 rounded-sm "></hr>
        <h5 className='text-[16px] font-medium mt-3 '>Design and Developed by <span className='text-[#FF971D]'>Hitesh Prajapati</span></h5>
      </div>
    </div>
  )
}

export default Footer
