import React from 'react';
import ListCards from './ListCards';
import SectionLists from './SectionLists';


const DataRecentlyViewed = [
    {
        img: 'https://v7n2u8v7.rocketcdn.me/wp-content/uploads/2019/05/238-TrI%E2%80%93MAIN.jpg',
        name: 'Swiss Apls'
    },
    {
        img: 'https://linntravel.com/wp-content/uploads/2020/07/146.jpg',
        name: 'Hallstatt'
    },

]
const RecentlyViewed = () => {
    return (
        <SectionLists>
            <h3 className="text-[24px] lg:text-[32px] font-bold text-black">Recently Viewed</h3>
            <ListCards data={DataRecentlyViewed}>
                <div className="relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/30 before:rounded-[16px] group w-[342px] py-[54px] px-[24px] rounded-[16px] shadow-lg bg-bgCard bg-cover bg-center bg-no-repeat text-white flex flex-col gap-[24px] h-[550px]">
                    <div className="z-20 flex flex-col gap-[24px]">
                        <h3 className='text-[24px] font-bold'>Summer Bonanza!</h3>
                        <p>Enjoy confortable transfers in shared coaches</p>
                        <p>Choose from 5 flights per week</p>
                        <p>Get a free Rapid Antigen Test at selected hotels</p>
                    </div>
                </div>
            </ListCards>
        </SectionLists>
    );
};

export default RecentlyViewed;