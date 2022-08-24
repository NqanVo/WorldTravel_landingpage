import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io'
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleOpenMenu = () => setToggleMenu(!toggleMenu);
    return (
        <header className="container max-w-[1272px] px-[10px] xl:px-0 mx-auto py-[24px] flex flex-row justify-between items-center">
            <h3 className="font-bold text-[32px] z-50">trxvl.</h3>
            <ul className={`${toggleMenu ? 'left-0 opacity-100' : 'left-[100%] opacity-0'} z-40 ease-in-out duration-500 flex text-xl lg:text-base flex-col gap-[40px] bg-black/80 fixed h-screen w-full justify-center items-center top-1/2 transform -translate-y-1/2 lg:transform-none lg:opacity-100 lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-auto lg:h-auto`}>
                <li className="relative cursor-pointer active">Home</li>
                <li className="relative cursor-pointer ">Stays</li>
                <li className="relative cursor-pointer ">Flights</li>
                <li className="relative cursor-pointer ">Packages</li>
                <li className="relative cursor-pointer font-bold">Sign Up</li>
            </ul>
            {toggleMenu ? (
                <IoMdClose
                    size={30}
                    className="block lg:hidden z-40 cursor-pointer"
                    onClick={handleOpenMenu}
                ></IoMdClose>
            ) : (
                <GiHamburgerMenu
                    size={30}
                    className="block lg:hidden z-40 cursor-pointer"
                    onClick={handleOpenMenu}
                ></GiHamburgerMenu>
            )}
        </header>
    );
};

export default Header;
