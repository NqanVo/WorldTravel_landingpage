import React from 'react';
import Card from './Card';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";



const ListCards = (props) => {
    return (
        <Swiper
            spaceBetween={-36}
            slidesPerView={3}
            grabCursor={true}
            breakpoints={{
                400: { width: 400, slidesPerView: 1 },
                768: { width: 768, slidesPerView: 2 },
            }}
        >
            {props.data.map((item, index) => (
                <SwiperSlide key={index}><Card key={index} img={item.img} name={item.name}></Card></SwiperSlide>
            ))}
            <SwiperSlide>{props.children}</SwiperSlide>
        </Swiper>
    );
};

export default ListCards;