'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider_1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true
        , responsive: [
            {
                breakpoint: 1024, // تغيير التكوين عند وصول عرض الشاشة إلى 1024 بكسل
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992, // تغيير التكوين عند وصول عرض الشاشة إلى 1024 بكسل
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // تغيير التكوين عند وصول عرض الشاشة إلى 768 بكسل
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 577, // تغيير التكوين عند وصول عرض الشاشة إلى 768 بكسل
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 455, // تغيير التكوين عند وصول عرض الشاشة إلى 768 بكسل
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <>
            <div class="container" id="carosel_2">
                <Slider { ...settings } >
                    <div >
                        <img src="carousel_2_1.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_2.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_3.jpg" alt="" />
                    </div>
                    <div >
                        <img src=" carousel_2_4.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_5.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_6.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_1.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_2.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_3.jpg" alt="" />
                    </div>
                    <div >
                        <img src=" carousel_2_4.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_5.jpg" alt="" />
                    </div>
                    <div >
                        <img src="carousel_2_6.jpg" alt="" />
                    </div>

                </Slider>
            </div>
        </>

    );
}

export default Slider_1

