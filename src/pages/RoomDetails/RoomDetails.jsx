import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineRight, AiOutlineBell, AiFillCustomerService, AiOutlineWifi, AiFillCar, AiOutlineCoffee, } from 'react-icons/ai';
import { PiTelevisionBold } from 'react-icons/pi';
import { GiCakeSlice, GiWineGlass, GiCigarette } from 'react-icons/gi';
import ReactTimeAgo from "react-time-ago";
import { Rate } from "antd";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swipper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

const RoomDetails = () => {
    const details = useLoaderData();
    const [review, setReview] = useState([])
    const { _id, available_seats, room_name, img1, img2, img3, img4, img5, price_per_night, room_description, room_size, special_offer } = details;


    useEffect(() => {
        fetch(`https://hotel-hydra-server.vercel.app/api/review?name=${room_name}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className="relative">
            <img className="h-[200px] w-full object-cover" src={img1} alt="" />
            <h2 className="text-5xl absolute top-10 font-bold text-[#B8860B] bg-white rounded-lg p-1 animate-pulse">{room_name}</h2>
            <div className="bg-amber-500 h-[70px] flex justify-around items-center">
                <h1 className={available_seats > 0 ? "font-extrabold text-green-600 rounded-lg p-2 text-2xl animate-bounce bg-green-200" : "font-extrabold text-red-600 rounded-lg p-2 text-2xl animate-bounce bg-red-200"}>{available_seats > 0 ? "Available" : "Unavailable"}</h1>
                <h1 className={special_offer === true ? "font-extrabold text-green-600 rounded-lg p-2 text-2xl animate-bounce bg-green-200" : "font-extrabold text-red-600 rounded-lg p-2 text-2xl animate-bounce bg-red-200"}>{special_offer === true ? "15% Offer" : "No Offer Available"}</h1>
            </div>
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
                            <img src={img2} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img1} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img1} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} className="h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} className="h-full object-cover" />
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
                <div className="lg:col-span-3 my-10 space-y-10">
                    <h1 className="text-5xl text-gray-500">ROOM BOOKING</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="rounded-lg">
                                <tr className="bg-[#D9A05A] text-white font-extrabold">
                                    <th>Available Seats</th>
                                    <th>Price Per Night</th>
                                    <th>Room Size</th>
                                    <th>Online Booking</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {/* row 1 */}
                                <tr>
                                    <th>{available_seats}</th>
                                    <td>{price_per_night} $</td>
                                    <td>{room_size}</td>
                                    <td>
                                        <Link to={`/book_now/${_id}`}>
                                            <button className="btn bg-[#D9A05A] transition ease-out duration-300 hover:scale-105 hover:bg-[#B8860B] hover:text-white animate-bounce hover:animate-none">Book Now</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pb-4">
                <h1 className="text-3xl md:text-5xl font-bold italic text-gray-500">Customer Reviews</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {
                        review.length>0 ? review.map(rev => <div key={rev._id} className=" rounded-tl-3xl rounded-tr-full bg-orange-300 text-black border-2 border-l-8 border-orange-500">
                            <div className="card-body">
                                <h2 className="card-title">{rev.userName}</h2>
                                <div className="flex items-center gap-16">
                                    <h2 className="font-bold">{rev.roomName}</h2>
                                    <h2>
                                        <ReactTimeAgo date={rev.time} locale="en-US"></ReactTimeAgo>
                                    </h2>
                                </div>
                                <p className="w-[90%]">{rev.comment}</p>
                                <div className="card-actions justify-end">
                                    <h1 className="animate-pulse"><Rate defaultValue={rev.rating} style={{color:'black'}}></Rate></h1>
                                </div>
                            </div>
                        </div>): <h1 className="text-3xl md:text-4xl text-center text-amber-400 font-bold italic underline underline-offset-8">No Reviews Available</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;