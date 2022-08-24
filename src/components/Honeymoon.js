import React from 'react';
import ListCards from './ListCards';
import SectionLists from './SectionLists';

const DataHoneymoon = [
    {
        img: 'https://winway.vn/wp-content/uploads/2021/05/mauritius-43980028-1546008965-ImageGalleryLightboxLarge-e1624937283850.jpg',
        name: 'Mauritius'
    },
    {
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/56/cb/b4/the-luxury-suite-cottages.jpg',
        name: 'Havelock'
    },
    {
        img: 'https://s1.at.atcdn.net/wp-content/uploads/2013/11/INTRO.jpg',
        name: 'Whitsunday Islands'
    },
    {
        img: 'https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng%205/Ng%C3%A0y_11/Anh/untitled%20folder/aerial-view.jpg',
        name: 'Maldives'
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

const Honeymoon = () => {
    return (
        <SectionLists>
            <h3 className="text-[24px] lg:text-[32px] font-bold text-black">Honeymoon Freebies Special</h3>
            <ListCards data={DataHoneymoon}></ListCards>
        </SectionLists>
    );
};

export default Honeymoon;