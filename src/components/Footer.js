import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='flex flex-col gap-[20px]'>
            <div className="grid grid-cols-1 lg:grid-cols-5 px-[10px]">
                <h3 className='font-bold text-[32px] text-white'>Trxvl.</h3>
                <ul className='flex flex-col gap-[15px] border-b border-b-gray-500 py-4 lg:border-none lg:py-0'>
                    <li>Seslendirme ve Alt Jazz</li>
                    <li>Media Market</li>
                    <li>Gillie</li>
                    <li>Size Last</li>
                </ul>
                <ul className='flex flex-col gap-[15px] border-b border-b-gray-500 py-4 lg:border-none lg:py-0'>
                    <li>Self Betimes</li>
                    <li>Yatırımcı İlişkileri</li>
                    <li>Basal Himmler</li>
                </ul>
                <ul className='flex flex-col gap-[15px] border-b border-b-gray-500 py-4 lg:border-none lg:py-0'>
                    <li>Yard Market</li>
                    <li>Is İmkanları</li>
                    <li>Car Tercihleri</li>
                </ul>
                <ul className='flex flex-col gap-[15px] border-b border-b-gray-500 py-4 lg:border-none lg:py-0'>
                    <li>Hedge Karla</li>
                    <li>Mullein Koşulları</li>
                    <li>Autumnal Bulgier</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 px-[10px] gap-[20px] lg:gap-0">
                <div className=""></div>
                <div className="col-span-2 flex flex-col gap-[20px]">
                    <h3 className='py-[10px] px-[15px] border border-gray-500 w-[104px] text-[13px]'>Helmet KOD</h3>
                    <p>© 1997-2021 Netflix, Inc.  {`{i - 062d573a0ee099242}`}</p>
                </div>
                <div className="col-span-2 flex gap-[20px] items-center">
                    <AiFillFacebook className='cursor-pointer text-3xl'></AiFillFacebook>
                    <AiFillInstagram className='cursor-pointer text-3xl'></AiFillInstagram>
                    <AiOutlineTwitter className='cursor-pointer text-3xl'></AiOutlineTwitter>
                    <AiFillYoutube className='cursor-pointer text-3xl'></AiFillYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;