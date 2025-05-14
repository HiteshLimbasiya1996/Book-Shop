import React from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import slide from "../assets/images/slide.png"
import Group2 from "../assets/images/Group2.png"
import Ellipse43 from "../assets/images/Ellipse43.png"

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className='w-full h-[500px] flex'>
      <div className='w-1/2 pl-[90px] pe-7 m-auto'>
        <div>
          <h1 className='text-[75px] font-bold'>Read And Add
            Your Insight
          </h1>
          <p className='my-7'>find your favorite book and read it here for free
          </p>
          <form class="w-[50%]">
            <input class="form-control pl-10" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline mt-[-64px]" type="submit"><IoSearch /></button>
          </form>
        </div>
      </div>
      <div className='w-1/2 bg-[#FF971D]'>
        <div className='flex justify-center relative'>
          <img src={slide} alt="" className='mt-[3px]'/>
          <img src={Ellipse43} className='absolute right-0 h-[450px]' alt="" srcset="" />
          <img src={Group2} className='absolute bottom-0 right-10' alt="" srcset="" />
          <img src={Group2} className='absolute top-12 left-[80px]' alt="" srcset="" />
        </div>
      </div>
    </div>

  )
}

export default MainSlider
