import React from 'react';
import { FiSearch } from 'react-icons/fi'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { useState } from 'react';
const SearchMobile = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => (setOpenSearch(!openSearch))
    return (
        <div className={`lg:hidden flex flex-col gap-[16px] ease-in-out duration-200 mx-[10px]`}>
            <div className="cursor-pointer flex gap-[10px] items-center justify-center rounded-[16px] bg-white/30 backdrop-blur-md py-[10px] px-[25px] h-[50px]">
                <FiSearch className='block w-[30px] text-[50px] opacity-80 hover:opacity-100 hover:scale-110 ease-in-out duration-500' onClick={handleOpenSearch}></FiSearch>
                <input type="text" className={`block bg-transparent outline-none border-none text-white w-[400px]`} placeholder='Search destinations, hotels' />
            </div>
            <div className="cursor-pointer flex gap-[10px] items-center justify-between rounded-[16px] bg-white/30 backdrop-blur-md py-[10px] px-[25px] h-[50px]">
                <div className={`cursor-pointer flex gap-[10px] items-center`}>
                    <IoCalendarClearOutline size={30}></IoCalendarClearOutline>
                    <span>Check in</span>
                </div>
                <div className={`cursor-pointer flex gap-[10px] items-center`}>
                    <IoCalendarClearOutline size={30}></IoCalendarClearOutline>
                    <span>Check out</span>
                </div>
            </div>
            <div className="cursor-pointer flex gap-[10px] items-center justify-center rounded-[16px] bg-white/30 backdrop-blur-md py-[10px] px-[25px] h-[50px]">
                <div className={`cursor-pointer flex gap-[10px] items-center`}>
                    <FaRegUser size={30}></FaRegUser>
                    <span>1 room, 2 adults</span>
                </div>
            </div>

            <button className={`block text-white bg-blue-600 px-[47px] py-[10px] rounded-[32px] font-bold ease-in-out duration-500 hover:opacity-80`}>Search</button>
        </div>
    );
};

export default SearchMobile;