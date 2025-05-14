import React from 'react'
import image1 from '../assets/images/image1.png'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

function CheckProducts() {
    return (
        <div className='relative'>
            <div className='absolute top-[-315px] '>
                <h4 className='text-[36px] font-medium text-white'>Cerita serupa</h4>
                <div className='mt-4 flex py-3 px-3 gap-2 bg-white'>
                    <div className='w-[40%]'>
                        <img src={image1} alt="" className='flex object-cover w-[147px]' />
                    </div>
                    <div className='w-[60%] '>
                        <h2 className='text-[25px] capitalize '>all the light we cannot see</h2>
                        <p className='text-[16] py-2'>by anthony doerr</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaRegStar />
                            <p className='text-[16] ml-2'>1,988,288 votes</p>
                        </div>
                        <p className='text-[16] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                       
                    </div>
                </div>
                 <div className='mt-4 flex py-3 px-3 gap-2 bg-white'>
                    <div className='w-[40%]'>
                        <img src={image1} alt="" className='flex object-cover w-[147px]' />
                    </div>
                    <div className='w-[60%] '>
                        <h2 className='text-[25px] capitalize '>all the light we cannot see</h2>
                        <p className='text-[16] py-2'>by anthony doerr</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaRegStar />
                            <p className='text-[16] ml-2'>1,988,288 votes</p>
                        </div>
                        <p className='text-[16] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                       
                    </div>
                </div>
                 <div className='mt-4 flex py-3 px-3 gap-2 bg-white'>
                    <div className='w-[40%]'>
                        <img src={image1} alt="" className='flex object-cover w-[147px]' />
                    </div>
                    <div className='w-[60%] '>
                        <h2 className='text-[25px] capitalize '>all the light we cannot see</h2>
                        <p className='text-[16] py-2'>by anthony doerr</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaRegStar />
                            <p className='text-[16] ml-2'>1,988,288 votes</p>
                        </div>
                        <p className='text-[16] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                       
                    </div>
                </div>
                 <div className='mt-4 flex py-3 px-3 gap-2 bg-white'>
                    <div className='w-[40%]'>
                        <img src={image1} alt="" className='flex object-cover w-[147px]' />
                    </div>
                    <div className='w-[60%] '>
                        <h2 className='text-[25px] capitalize '>all the light we cannot see</h2>
                        <p className='text-[16] py-2'>by anthony doerr</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaStar className='text-[#FF971D] ' />
                            <FaRegStar />
                            <p className='text-[16] ml-2'>1,988,288 votes</p>
                        </div>
                        <p className='text-[16] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckProducts
