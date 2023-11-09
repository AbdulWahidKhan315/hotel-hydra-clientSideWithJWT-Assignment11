import { useEffect } from "react"
import offer1 from "../../assets/offer1.jpg"
import offer2 from "../../assets/offer2.jpg"
import offer3 from "../../assets/offer3.jpg"
import offer4 from "../../assets/offer4.jpg"
import offer5 from "../../assets/offer5.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
const Packages = () => {

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    
    

    return (
        <div className="container mx-auto">
            <h1 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="text-3xl lg:text-5xl text-center my-10 font-bold">Hotel Hydra Resort <span className="text-[#B8860B]">Hot Packages</span> in <span className="text-[#B8860B]">Cox's Bazar</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer1} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Winter Package 2024</h2>
                        <p className="text-gray-500">2 Nights Accommodation For 2 person</p>
                        <p className="text-gray-500">7000 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Enjoy Winter With Us...</h2>

                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer2} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Spring Offer For Couple 2018</h2>
                        <p className="text-gray-500">3 days & 2 nights</p>
                        <p className="text-gray-500">8500 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Let's Love spring...</h2>

                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer3} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Anniversary Offer 2018</h2>
                        <p className="text-gray-500">Lunch & Dinner Unlimited for two Person</p>
                        <p className="text-gray-500">6500 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Celebrate boishakh in cox bazar...</h2>

                    </div>
                </div>
                <div data-aos="fade-zoom-in"data-aos-easing="ease-in-back"data-aos-delay="300"data-aos-offset="0" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer4} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Valentines Months Offer For Couple</h2>
                        <p className="text-gray-500">2 Nights, 3 days (accommodation)</p>
                        <p className="text-gray-500">6500 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Show loved with our loved once...</h2>

                    </div>
                </div>
                <div data-aos="fade-zoom-in"data-aos-easing="ease-in-back"data-aos-delay="300"data-aos-offset="0" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer5} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Special Eid Package</h2>
                        <p className="text-gray-500">2 Night Couple Accommodation with Breakfast</p>
                        <p className="text-gray-500">15,500 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Celebrate your best EID...</h2>

                    </div>
                </div>
                <div data-aos="fade-zoom-in"data-aos-easing="ease-in-back"data-aos-delay="300"data-aos-offset="0" className="rounded-t-[100px] card-compact bg-orange-100 shadow-xl border-t-8 border-[#B8860B] hover:border-lime-500">
                    <figure><img src={offer4} className="rounded-t-[100px]" alt="Shoes" /></figure>
                    <div className="card-body border-t-8 border-[#B8860B] hover:border-lime-500">
                        <h2 className="card-title text-[#B8860B]">Honeymoon Package</h2>
                        <p className="text-gray-500">Air/Bus Ticket, 2 Night Accommodation Honeymoon Bed Special</p>
                        <p className="text-gray-500">22,500 tk food</p>
                        <h2 className="card-title text-[#B8860B]">Enjoy Honeymoon With Us...</h2>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Packages;