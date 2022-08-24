import React from 'react';
import ListCards from './ListCards';
import SectionLists from './SectionLists';

const DataPopularBeach = [
    {
        img: 'https://v7n2u8v7.rocketcdn.me/wp-content/uploads/2019/05/238-TrI%E2%80%93MAIN.jpg',
        name: 'Swiss Apls'
    },
    {
        img: 'https://linntravel.com/wp-content/uploads/2020/07/146.jpg',
        name: 'Hallstatt'
    },
    {
        img: 'https://guidetofaroeislands.fo/wp-content/uploads/2021/06/Tjornuvik-Guide-to-Faroe-Islands-3-scaled-e1623343666208.jpg',
        name: 'Faroe Island'
    },
    {
        img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/aon2d6upwmv44vwzmbdy/V%C3%A9%20V%C3%A9%20Innsbruck%20City%20Tower.jpg',
        name: 'Innsbruck'
    },
    {
        img: 'https://v7n2u8v7.rocketcdn.me/wp-content/uploads/2019/05/238-TrI%E2%80%93MAIN.jpg',
        name: 'Swiss Apls'
    },
]

const PopularBeach = () => {
    return (
        <SectionLists>
            <h3 className="text-[24px] lg:text-[32px] font-bold text-black lg:text-white">Popular Beach Destinations</h3>
            <ListCards data={DataPopularBeach}></ListCards>
        </SectionLists>
    );
};

export default PopularBeach;