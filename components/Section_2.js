'use client'

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import { client, urlFor } from '../Lib/client';
import { useStateContext } from "../context/StateContext";
const Section_2 = ( { products, product } ) => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        // responsive: false,
        responsive: [
            {
                breakpoint: 1024, // تغيير التكوين عند وصول عرض الشاشة إلى 1024 بكسل
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1300, // تغيير التكوين عند وصول عرض الشاشة إلى 1024 بكسل
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992, // تغيير التكوين عند وصول عرض الشاشة إلى 1024 بكسل
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 603, // تغيير التكوين عند وصول عرض الشاشة إلى 768 بكسل
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 577, // تغيير التكوين عند وصول عرض الشاشة إلى 768 بكسل
                settings: {
                    slidesToShow: 2,
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

            <div className="sec_6">
                <div className="main-title">
                    <h2>Mobile &amp; Tablets offers</h2>
                </div>
                <div className="div_2-sec_6 container">
                    <div>
                        <a href="">
                            <img src="/sec_6_1.jpg" alt="" />
                        </a>
                        <a href="">
                            <img src="/sec_6_2.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="/sec_6_3.jpg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="/sec_6_5.jpg" alt="" />
                        </a>
                        <a href="">
                            <img src="/sec_6_6.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sec_7 features container ">

  <Slider { ...settings } >
    { product?.map( ( item ) => (
        <div key={ item._id } className="box quality item">
          
            <Link href={ `/technology-product/${item.slug.current}` }>
                <div className="img-holder">
                 
                        <img src={ urlFor( item.image[0] ) } alt="" />
                  
                    </div>  </Link>
                <h2>{ item.price } EGB</h2>
                <Link href={ `/product/${item.slug.current}` }>
                    <p>{ item.details }</p>
            </Link>
      
            <button href="#" onClick={ () => onAdd( item, 1 ) }>
                Add To CArd <i className="fa fa-shopping-bag" aria-hidden="true" />
            </button>
        </div>
    ) ) }
</Slider>

 
            </div >

            <div className="img-section_2">
                <div className="main-title">
                    <h2>Personal care offers</h2>
                </div>
                <div className="container">
                    <div>
                        <img src="personal-offers_1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="personal-offers_2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="section-img-3">
                <div className="container">
                    <img src="/section-img_3.jpg" alt="" />
                </div>
            </div>


        </>
    )
}

export default Section_2
