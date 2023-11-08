import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { Rate } from 'antd';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='container mx-auto'>
            <h1 className='text-xl mt-8 text-center font-bold uppercase text-gray-500'>Testimonials</h1>
            <h1 className='text-4xl font-bold text-center text-[#B8860B] mt-8 italic uppercase'>What Customers Say</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full">
                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">

                                </div>
                                <div>
                                    <h2 className="card-title text-white">Farah Hussain</h2>
                                    <h3 className="text-xl text-white">Traveler</h3>
                                </div>
                            </div>
                            <p className="text-xl text-[#DEB887]">Best service!! Very efficient and well-mannered!</p>
                            <p className="text-gray-300">“The food was fresh and delicious. If you like quiet surrounding it’s the perfect place. Very safe for families! The pics of the resorts are actual! A bit of a walk to the beach, but it was worth it as the water was clean, and literally had the beach to ourselves.”</p>
                            <div className="card-actions justify-end">
                                <Rate defaultValue={5}></Rate>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-xl bg-gradient-to-r from-lime-500 from-10% via-green-500 via-30% to-teal-500 to-90% h-full">
                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">

                                </div>
                                <div>
                                    <h2 className="card-title text-white">Sabbir Sohan</h2>
                                    <h3 className="text-xl text-white">Google Local Guide</h3>
                                </div>
                            </div>
                            <p className="text-xl text-[#DEB887]">Food and nature make an amazing experience</p>
                            <p className="text-gray-300">“To be honest most of the restaurants in Cox's Bazar are good and maintain a similar quality, the only exception is their price and service quality. I've been to sampan beach resort only once, I like their food, and the location is a bit too far from the main town but the surrounding nature is really good.”</p>
                            <div className="card-actions justify-end">
                                <Rate defaultValue={5}></Rate>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card shadow-xl bg-gradient-to-r from-lime-700 from-10% via-sky-500 via-30% to-emerald-700 to-90% h-full">
                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">

                                </div>
                                <div>
                                    <h2 className="card-title text-white">Hridoy ahmed</h2>
                                    <h3 className="text-xl text-white">Photographer</h3>
                                </div>
                            </div>
                            <p className="text-xl text-[#DEB887]">Best service!! Very efficient and well-mannered!</p>
                            <p className="text-gray-300">“The food was fresh and delicious. If you like quiet surrounding it’s the perfect place. Very safe for families! The pics of the resorts are actual! A bit of a walk to the beach, but it was worth it as the water was clean, and literally had the beach to ourselves.”</p>
                            <div className="card-actions justify-end">
                                <Rate defaultValue={5}></Rate>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}