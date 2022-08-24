import React from 'react';
import { FiSearch } from 'react-icons/fi'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { useState } from 'react';
const Search = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => (setOpenSearch(!openSearch))
    return (
        <div className={`lg:flex hidden ${openSearch ? 'w-full justify-between' : 'w-[150px] justify-center'} mx-auto rounded-[16px] backdrop-blur-md bg-white/30 h-[60px] py-[10px] px-[25px] items-center ease-in-out duration-200`}>
            <div className="cursor-pointer flex gap-[10px] items-center">
                <FiSearch className='block w-[30px] text-[50px] opacity-80 hover:opacity-100 hover:scale-110 ease-in-out duration-500' onClick={handleOpenSearch}></FiSearch>
                <input type="text" className={`${openSearch ? 'block' : 'hidden'} bg-transparent outline-none border-none text-white w-[400px]`} placeholder='Search destinations, hotels' />
            </div>
            <div className={`${openSearch ? 'block' : 'hidden'} cursor-pointer flex gap-[10px] items-center`}>
                <IoCalendarClearOutline size={30}></IoCalendarClearOutline>
                <span>Check in</span>
            </div>
            <div className={`${openSearch ? 'block' : 'hidden'} cursor-pointer flex gap-[10px] items-center`}>
                <IoCalendarClearOutline size={30}></IoCalendarClearOutline>
                <span>Check out</span>
            </div>
            <div className={`${openSearch ? 'block' : 'hidden'} cursor-pointer flex gap-[10px] items-center`}>
                <FaRegUser size={30}></FaRegUser>
                <span>1 room, 2 adults</span>
            </div>
            <button className={`${openSearch ? 'block' : 'hidden'} text-[#1B4E7A] bg-white px-[47px] py-[10px] rounded-[32px] font-bold ease-in-out duration-500 hover:opacity-70`}>Search</button>
        </div>
    );
};

export default Search;