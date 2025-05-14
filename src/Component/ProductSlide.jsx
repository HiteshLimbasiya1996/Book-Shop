import React from 'react'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import image11 from "../assets/images/image11.png"
import image14 from "../assets/images/image14.png"
import image16 from "../assets/images/image16.png"
import image21 from "../assets/images/image21.png"

function ProductSlide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={image11} alt="" className='object-cover'/>
                    <h3 className='text-[20px] mt-2'>Tentang kamu</h3>
                    <p className='py-2'>tere liye</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaRegStar />

                    </div>
                </div>
                <div>
                <img src={image14} alt="" className='object-cover' />
                    <h3 className='text-[20px] mt-2'>Pergi</h3>
                    <p className='py-2'>tere liye</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaRegStar />

                    </div>
                </div>
                <div>
                <img src={image16} alt="" className='object-cover'/>
                    <h3 className='text-[20px] mt-2'>Becoming</h3>
                    <p className='py-2'>Miechelle obama</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaRegStar />

                    </div>
                </div>
                <div>
                <img src={image21} alt="" className='object-cover'/>
                    <h3 className='text-[20px] mt-2'>garis waktu</h3>
                    <p className='py-2'>Fiersa besari</p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaStar className='text-[#FF971D] ' />
                        <FaRegStar />

                    </div>
                </div>
            
            </Slider>
        </div>
    )
}

export default ProductSlide
