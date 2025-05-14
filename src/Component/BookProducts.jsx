import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import image1 from "../assets/images/image1.png"
import ProductSlide from './ProductSlide';
import { ProductContext } from '../Context/ShopContext'

function BookProducts() {

    const { products } = useContext(ProductContext);

    return (
        <div className='bg-[#F5F6F8] py-[80px]'>
            <div className='text-black px-[50px] py-[42px] shadow-lg'>
                <div>
                    <h1 className='text-[40px] font-bold'>Recommended</h1>
                </div>

                {
                    products.slice(0, 4).map ((item) => (
                         <div className=' flex flex-wrap justify-between mt-9 w-full gap-[30px]'>
                            <div className='flex w-[47%] gap-2'>

                                <div className='w-[40%]'>
                                    <img src={item.image} alt="" className='flex object-cover' />
                                </div>
                                <div className='w-[60%] '>
                                    <h2 className='text-[25px] capitalize '>{item.title}</h2>
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
                    ))
                }




                {/* <div className='flex w-[48%] gap-2'>
                        <div className='w-[40%]'>
                            <img src={image1} alt="" className='flex object-cover' />
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
                    <div className='flex w-[48%] gap-2'>
                        <div className='w-[40%]'>
                            <img src={image1} alt="" className='flex object-cover' />
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
                    <div className='flex w-[48%] gap-2'>
                        <div className='w-[40%]'>
                            <img src={image1} alt="" className='flex object-cover' />
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
                    </div> */}
            {/* </div> */}

            <div className='mt-20'>
                <div className='mb-12'>
                    <h1 className='text-[40px] font-bold'>Popular</h1>
                </div>
                <ProductSlide />
            </div>


        </div>
        </div >
    )
}

export default BookProducts
