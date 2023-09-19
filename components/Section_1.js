
// import { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client, urlFor } from '../Lib/client';
import { Product, Footer } from '../components';
import Link from "next/link";
import { useStateContext } from "../context/StateContext";

const Section_1 = ( { products, product } ) => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 603,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="img-section_1">
                <div className="main-title">
                    <h2>Recommended Offers</h2>
                </div>
                <div className="container">
                    <img src="/img-section_1.jpg" alt="" />
                </div>
            </div>

            <div className="sec_7 features container">
                <Slider { ...settings }>
                    { product?.map( ( item ) => (
                        <div key={ item._id } className="box quality item">
                            <Link href={ `/product/${item.slug.current}` }>
                                <div className="img-holder">
                                    <img src={ urlFor( item.image[0] ) } alt="" />
                                </div>
                            </Link>
                            <h2>{ item.price } EGB</h2>
                            <Link href={ `/product/${item.slug.current}` }>
                                <p>{ item.details }</p>
                            </Link>
                            <button href="#" onClick={ () => onAdd( item ,1) }>
                                Add To Cart <i className="fa fa-shopping-bag" aria-hidden="true" />
                            </button>
                        </div>
                    ) ) }
                </Slider>
            </div>
        </>
    );
}

export default Section_1;
