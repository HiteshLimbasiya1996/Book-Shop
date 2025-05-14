import React from 'react'
import Group2 from '../assets/images/Group2.png'
import Ellipse43 from '../assets/images/Ellipse43.png'

function PlainBg() {
    return (
        <div className='bg-[#FF971D] h-[450px] relative overflow-hidden'>
            <img src={Group2} alt="" className='absolute top-0 right-[150px] ' />
            <img src={Group2} alt="" className='absolute bottom-[-30px] right-0 ' />
            <img src={Group2} alt="" className='absolute top-[120px] left-0 ' />
            <img src={Ellipse43} alt="" className='absolute top-[50px] right-0 h-[350px] ' />
            <img src={Ellipse43} alt="" className='absolute bottom-[-120px] left-0 h-[350px] rotate-180' />

        </div>
    )
}

export default PlainBg
