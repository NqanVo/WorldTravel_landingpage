import React from 'react';
import ListCards from './ListCards';
import SectionLists from './SectionLists';

const DataPopularBeach = [
    {
        img: 'https://www.moonhoneytravel.com/wp-content/uploads/2017/08/moonhoneytravel_Geisler-Alm_Val-di-Funes_South-Tyrol.jpg',
        name: 'Val di Funes'
    },
    {
        img: 'https://hanoimoi.com.vn/Uploads/images/anhthu/2020/07/10/chile-.jpg',
        name: 'Ushuaia'
    },
    {
        img: 'https://www.storiesbysoumya.com/wp-content/uploads/2021/06/berchtesgaden-germany-768x432.jpg',
        name: 'Berchtesgaden'
    },
    {
        img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/aon2d6upwmv44vwzmbdy/V%C3%A9%20V%C3%A9%20Innsbruck%20City%20Tower.jpg',
        name: 'Innsbruck'
    },
    {
        img: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Fussen.jpg',
        name: 'Fussen'
    },
    {
        img: 'https://v7n2u8v7.rocketcdn.me/wp-content/uploads/2019/05/238-TrI%E2%80%93MAIN.jpg',
        name: 'Swiss Apls'
    },
]

const AllPackages = () => {
    return (
        <SectionLists>
            <h3 className="text-[24px] lg:text-[32px] font-bold text-black">All Inclusive Packages!</h3>
            <ListCards data={DataPopularBeach}></ListCards>
        </SectionLists>
    );
};

export default AllPackages;