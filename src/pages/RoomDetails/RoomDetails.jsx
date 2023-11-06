import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineRight, AiOutlineBell, AiFillCustomerService, AiOutlineWifi, AiFillCar,AiOutlineCoffee, } from 'react-icons/ai';
import {PiTelevisionBold} from 'react-icons/pi';
import {GiCakeSlice, GiWineGlass, GiCigarette} from 'react-icons/gi';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swipper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const RoomDetails = () => {
    const details = useLoaderData();
    const { _id, room_name, availabilit, img1, img2, img3, price_per_night, room_description, room_size, special_offer } = details;
    return (
        <div className="relative">
            <img className="h-[200px] w-full object-cover" src={img1} alt="" />
            <h2 className="text-5xl absolute top-10 font-bold text-[#B8860B] bg-white rounded-lg p-1">{room_name}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:mt-32  container mx-auto">
                <div className="lg:col-span-3 lg:mr-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="space-y-10 border border-amber-500 p-10">
                    <h1 className="text-3xl text-[#B8860B]">COMPLIMENTARY</h1>
                    <p className="flex items-center gap-4"><AiOutlineRight></AiOutlineRight>Breakfast for 4 pax</p>
                    <p className="flex items-center gap-4"><AiOutlineRight></AiOutlineRight>Welcome drink ( on arrival)</p>
                    <p className="flex items-center gap-4"><AiOutlineRight></AiOutlineRight>Airport pick-up (on-demand)</p>
                    <p className="flex items-center gap-4"><AiOutlineRight></AiOutlineRight>Mineral water 500ml x 2 bottles</p>
                    <p className="flex items-center gap-4"><AiOutlineRight></AiOutlineRight>Internet in the rooms & lobby</p>
                </div>
                <div className="lg:col-span-3 flex  lg:items-center justify-center lg:gap-4">
                    <h1 className="text-[#B8860B] text-xl lg:text-8xl">A</h1>
                    <p>{room_description}</p>
                </div>
                <div className="lg:col-span-3 mt-10 space-y-10">
                    <h1 className="text-5xl text-gray-500">Features</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="space-y-4">
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>2 Presidential Suites</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>King Master Bedroom</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Couple Bed In 2nd Room</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Family Living</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>One Long Balcony</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Intercom</p>
                        </div>
                        <div className="space-y-4">
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Two Separate Bathrooms</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Master Marble Bathroom</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Individual Climate Room</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Work Desk With Chair</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>42' & 32" LCD Televisions</p>
                        </div>
                        <div className="space-y-4">
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>High-Speed Internet Access</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>In-Room Refresh Center</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Service Kitchen Products</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>Complimentary Newspaper</p>
                            <p className="flex items-center gap-4"><AiOutlineRight className="text-[#B8860B] text-xl"></AiOutlineRight>In-Room Safe</p>
                        </div>
                    </div>
                </div>
                {/* room amenities */}
                <div className="lg:col-span-3 mt-10 space-y-10">
                    <h1 className="text-5xl text-gray-500">ROOM AMENITIES</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="space-y-4">
                            <p className="flex items-center gap-4"><AiOutlineBell className="text-2xl text-[#B8860B]"></AiOutlineBell>24/7 Receiption</p>
                            <p className="flex items-center gap-4"><AiFillCustomerService className="text-2xl text-[#B8860B]"></AiFillCustomerService>24/24 Room Service</p>
                            <p className="flex items-center gap-4"><AiOutlineWifi className="text-2xl text-[#B8860B]"></AiOutlineWifi>Free Wifi</p>
                        </div>
                        <div className="space-y-4">
                        <p className="flex items-center gap-4"><PiTelevisionBold className="text-2xl text-[#B8860B]"></PiTelevisionBold>HD TV</p>
                        <p className="flex items-center gap-4"><AiOutlineCoffee className="text-2xl text-[#B8860B]"></AiOutlineCoffee>Breakfast Included</p>
                        <p className="flex items-center gap-4"><AiFillCar className="text-2xl text-[#B8860B]"></AiFillCar>Free Car Park</p>
                        </div>
                        <div className="space-y-4">
                        <p className="flex items-center gap-4"><GiCakeSlice className="text-2xl text-[#B8860B]"></GiCakeSlice>Open Buffet</p>
                        <p className="flex items-center gap-4"><GiWineGlass className="text-2xl text-[#B8860B]"></GiWineGlass>Mini-Bar</p>
                        <p className="flex items-center gap-4"><GiCigarette className="text-2xl text-[#B8860B]"></GiCigarette>Smoking Room</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;