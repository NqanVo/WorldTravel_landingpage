
import { Swiper, SwiperSlide } from "swiper/react";

//css slider swiper
import "swiper/css";

const DataCategories = [
    {
        img: "./assets/categories1.png",
        name: "Beaches",
    },
    {
        img: "./assets/categories2.png",
        name: "Deserts",
    },
    {
        img: "./assets/categories3.png",
        name: "Mountains",
    },
    {
        img: "./assets/categories4.png",
        name: "IconicCities",
    },
    {
        img: "./assets/categories5.png",
        name: "Houseboats",
    },
    {
        img: "./assets/categories2.png",
        name: "Countryside",
    },
    {
        img: "./assets/categories3.png",
        name: "Camping",
    },
    {
        img: "./assets/categories1.png",
        name: "Castles",
    },
    {
        img: "./assets/categories2.png",
        name: "Skiing",
    },
    {
        img: "./assets/categories5.png",
        name: "Tropical",
    },
    {
        img: "./assets/categories4.png",
        name: "Countryside",
    },
    {
        img: "./assets/categories2.png",
        name: "Beaches",
    },
    {
        img: "./assets/categories1.png",
        name: "Mountains",
    },
];

const TopCategories = () => {
    return (
        <div className="flex flex-col gap-[32px] px-[10px] lg:px-0">
            <h3 className="text-[24px] lg:text-[32px] font-bold">Top categories</h3>
            <div className="w-full flex items-center">
                <Swiper
                    className="flex w-full gap-[40px]"
                    spaceBetween={-4}
                    // autoplay={true}
                    // loop={true}
                    // onDurationChange={2000}
                    grabCursor={true}
                    slidesPerView={10}
                    breakpoints={{
                        400: { width: 400, slidesPerView: 5, spaceBetween: 50 },
                        768: { width: 768, slidesPerView: 6 },
                    }}
                >
                    {DataCategories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ul className="w-[78px] text-center flex flex-col gap-[16px] justify-center cursor-pointer text-gray-400">
                                <li className="w-[32px] h-[32px] mx-auto">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="drop-shadow-2xl block w-full h-full object-cover"
                                    />
                                </li>
                                <li>{item.name}</li>
                            </ul>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopCategories;
