"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider_2 = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true
        ,
        fade: true
    };
    return (
        <>

            <Slider { ...settings } className="sec_1_new container">
                <div><img className="" src="carouse-2.jpg" alt="Image 1" /></div>


                <div> <img className="" src=" carousel-1.jpg" alt="Image 2" /></div>


                <div> <img className="" src="carousel-4.jpg" alt="Image 3" /></div>
            </Slider>
            <div>
                <div class="sec_2 container">
                    <img src="/gif_ar_web.gif" alt="gif" />
                </div>
            </div>
            <div>
                <div className="sec_3">
                    <div className="container">
                        <a>
                            <img src="/الشحن1.svg" alt="" />
                            Free Shipping
                        </a>
                        <a>
                            <img src="/pickup1.svg" alt="" />
                            pick up from stores
                        </a>
                        <a>
                            <img src="/technical3.svg" alt="" />
                            Technical Services
                        </a>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Slider_2

