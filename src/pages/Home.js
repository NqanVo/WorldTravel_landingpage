import React from 'react';
import AllPackages from '../components/AllPackages';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Honeymoon from '../components/Honeymoon';
import PopularBeach from '../components/PopularBeach';
import RecentlyViewed from '../components/RecentlyViewed';
import Search from '../components/Search';
import SearchMobile from '../components/SearchMobile';
import TopCategories from '../components/TopCategories';

const Home = () => {
    return (
        <main className='text-white overflow-x-hidden'>
            {/* header  */}
            <section className="bgHeader h-screen lg:h-[840px] w-full relative">
                <Header></Header>
                <div className="container lg:max-w-[1126px] mx-auto flex flex-col gap-[40px]">
                    <Banner></Banner>
                    <Search></Search>
                    <SearchMobile></SearchMobile>
                    <TopCategories></TopCategories>
                </div>
            </section>
            {/* hero */}
            <section className='w-full relative container lg:max-w-[1126px] mx-auto'>
                <div className="absolute top-0 lg:top-[-200px] flex flex-col gap-[72px] w-full">
                    <div className="overflow-x-hidden">
                        <PopularBeach></PopularBeach>
                        <RecentlyViewed></RecentlyViewed>
                        <AllPackages></AllPackages>
                        <Honeymoon></Honeymoon>
                    </div>
                    {/* footer  */}
                    <section className='bg-[#141414] text-[#808080] py-[42px] w-full relative'>
                        <Footer></Footer>
                        <div className="absolute left-[-100%] top-0 w-full h-full bg-[#141414]"></div>
                        <div className="absolute right-[-100%] top-0 w-full h-full bg-[#141414]"></div>
                    </section>
                </div>
            </section>

        </main>
    );
};

export default Home;