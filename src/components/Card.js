import React from 'react';
import { AiFillStar, AiOutlineCar } from 'react-icons/ai'
import { TiPlaneOutline } from 'react-icons/ti'
import { RiHotelLine } from 'react-icons/ri'
import { BiWalk } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
const Card = (props) => {
    return (
        <div className='group w-[342px] p-[15px] rounded-[16px] shadow-lg bg-white text-black/80 flex flex-col gap-[24px] h-[550px]'>
            <div className="w-[313px] h-[200px] overflow-hidden rounded-[16px]">
                <img src={props.img} alt="" className='w-full h-full object-cover group-hover:scale-110 ease-in-out duration-500' />
            </div>
            <div className="flex justify-between text-black">
                <h2 className='text-[24px] group-hover:text-blue-600 ease-in-out duration-500'>{props.name}</h2>
                <h2 className='text-[24px] flex items-center gap-[10px] group-hover:text-red-600 ease-in-out duration-500'><AiFillStar></AiFillStar> 4.7</h2>
            </div>
            <span className='mt-[-20px]'>3Days 4 Nights</span>
            <ul className='flex justify-between text-[12px]'>
                <li className='flex gap-[10px] flex-col justify-center items-center'><TiPlaneOutline size={24}></TiPlaneOutline> 2 Flights</li>
                <li className='flex gap-[10px] flex-col justify-center items-center'><RiHotelLine size={24}></RiHotelLine> 1 Hotel</li>
                <li className='flex gap-[10px] flex-col justify-center items-center'><AiOutlineCar size={24}></AiOutlineCar> 2 Transfers</li>
                <li className='flex gap-[10px] flex-col justify-center items-center'><BiWalk size={24}></BiWalk> 4 Activities</li>
            </ul>
            <ul className=''>
                <li className='flex gap-[10px] items-center'><BsDot size={20}></BsDot> Tour combo with return airport transfer</li>
                <li className='flex gap-[10px] items-center'><BsDot size={20}></BsDot> City Tour</li>
                <li className='flex gap-[10px] items-center'><BsDot size={20}></BsDot> Curious Corner</li>
            </ul>
            <ul className='flex items-center gap-[24px]'>
                <li className='line-through'>₹88,952</li>
                <li className='text-[24px] font-bold'>₹88,952 <span className='text-base font-normal'>Per person</span></li>
            </ul>
        </div>
    );
};

export default Card;