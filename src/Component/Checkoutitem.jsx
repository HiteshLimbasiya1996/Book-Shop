import React from 'react'
import Group2 from '../assets/images/Group2.png'
import Ellipse43 from '../assets/images/Ellipse43.png'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import Image21 from '../assets/images/Image21.png'

function Checkoutitem() {
  return (

    <div className='w-full'>
      <div className='bg-[#F5F6F8] py-[80px] px-[70px] h-[900px] relative'>
        <div className='absolute top-[-315px]'>
          <div className='bg-white px-[20px] py-[42px] relative'>
            <div className='flex w-full gap-4 justify-normal'>
              <div className='w-[30%] '>
                <img src={Image21} alt="" className='flex object-cover shadow-md absolute top-0 left-0' />
              </div>
              <div className='w-[60%] '>
                <h2 className='text-[53px] font-medium capitalize flex items-center '>garis waktu <span className='ml-3 text-[20px]'><CiSquarePlus /></span></h2>

                <div className='flex gap-4'>
                  <p className='text-[16] py-2'>by Fiersa besari</p>
                  <p className='text-[16] py-2'>1 juli 2016</p>
                </div>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-[#FF971D] ' />
                  <FaStar className='text-[#FF971D] ' />
                  <FaStar className='text-[#FF971D] ' />
                  <FaStar className='text-[#FF971D] ' />
                  <FaRegStar />

                </div>
                <div className='flex gap-4'>
                  <p className='text-[16] py-2'>3.7M read</p>
                  <p className='text-[16] py-2'>9.8K Votes</p>
                </div>
                <div className='flex gap-3'>
                  <button className='mt-3 bg-[#FF971D] border-[1px] border-[#FF971D] text-white py-[12px] w-full rounded-[10px]'>Buy now</button>
                  <button className='mt-3 bg-white border-[1px] border-[#FF971D] text-[#FF971D] py-[12px] w-full rounded-[10px]'>Buy now</button>
                </div>
              </div>
            </div>
            <div className='mt-20'>
              <h4 className='text-[25px] font-medium mb-3'>Sinopsis</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue. Risus id purus dolor dolor. Sagittis at vulputate rhoncus pharetra purus vitae, ac. Sit nam eleifend mauris, duis mattis leo, ut. Viverra accumsan elementum vehicula orci magna. Elementum, euismod ut sed at ut non. Eget commodo mi scelerisque erat. Mus adipiscing et mattis vitae sapien turpis. Eu, sit urna, convallis in commodo, sed condimentum dictumst vitae. Ultricies aenean a non tincidunt tortor ut pulvinar. Vulputate viverra tempor sed turpis at blandit malesuada at quam. Enim cursus vitae turpis lectus egestas nunc risus.</p>
            </div>
            <div className='flex gap-3 mt-[40px]'>
              <button className='mt-3 bg-[#DEDEDE] text-[16px] border-[1px] border-[#DEDEDE] text-black py-[12px] w-[118px] rounded-[10px]'>Buy now</button>
              <button className='mt-3 bg-[#DEDEDE] text-[16px] border-[1px] border-[#DEDEDE] text-black py-[12px] w-[118px] rounded-[10px]'>AutoBiografi</button>
              <button className='mt-3 bg-[#DEDEDE] text-[16px] border-[1px] border-[#DEDEDE] text-black py-[12px] w-[118px] rounded-[10px]'>Memoar</button>
            </div>
            <div className='mt-[70px] w-[445px]'>
              <h4 className='text-[25px] font-medium mb-3'>Informasi Tambahan</h4>
              <div className='gap-[20px] flex flex-wrap'>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>Penerbit</h5>
                  <p>mediakita</p>
                </div>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>diterbitkan tanggal</h5>
                  <p>1 juli 2016</p>
                </div>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>bahasa</h5>
                  <p>indonesia</p>
                </div>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>genre</h5>
                  <p>Fiksi / romance / Umum</p>
                </div>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>halaman</h5>
                  <p>210 halaman</p>
                </div>
                <div className='w-[30%]'>
                  <h5 className='font-medium'>keterangan</h5>
                  <p>selesai</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-[80px]'>
              <button className='bg-white border-[1px] border-[#FF971D] text-[#FF971D] py-[12px] w-[480px] text-[20px] font-medium rounded-[10px]'>See comment</button>
            </div>
          </div>
        </div >
      </div >
    </div>

  )
}

export default Checkoutitem
