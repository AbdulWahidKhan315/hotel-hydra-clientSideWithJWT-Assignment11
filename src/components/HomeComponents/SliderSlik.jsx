import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component } from "react";

import slider1 from '../../assets/sliderImg/slider1.jpg'
import slider2 from '../../assets/sliderImg/slider2.jpg'
import slider3 from '../../assets/sliderImg/slider3.jpg'
import slider4 from '../../assets/sliderImg/slider4.jpg'
import slider5 from '../../assets/sliderImg/slider5.jpg'
import slider6 from '../../assets/sliderImg/slider6.jpg'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 8000,
            autoplaySpeed: 50,
            cssEase: "linear"
        };
        return (
            <div className="">
                <div className="relative lg:container mx-auto w-11/12">
                    <Slider {...settings}>
                        <div>
                            <img src={slider1} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider2} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider3} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider4} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider5} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider6} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                    </Slider>
                    <div className="text-center flex justify-center items-center text-[#B8860B]">
                        <h2 className="text-2xl md:text-5xl lg:text-6xl absolute top-10 font-bold italic">The Best Secure Hotel In Dhaka</h2>
                        <h5 className="text-sm md:text-xl absolute top-20 md:top-36 font-bold">Most Luxurious Secure Hotel in Dhaka with the Royal Treatments and Excellent Customer Service.</h5>
                    </div>
                </div>
            </div>
        );
    }
}