
import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client, urlFor } from '../../Lib/client';

import { useStateContext } from '../../context/StateContext';
import Link from 'next/link';
import Slider from 'react-slick';

const ProductDetails = ( { product, products } ) => {

    useEffect( () => {
        setQty( 1 ); // تعيين الكمية إلى 1 عند فتح صفحة منتج جديدة
    }, [product] );



    const { image, name, details, price } = product;

    const [index, setIndex] = useState( 0 );
    const [qty, setQty] = useState( 1 ); // حالة فردية للكمية لكل منتج
    const { decQty, incQty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd( product, qty );
        setShowCart( true );
    }

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
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={ urlFor( image && image[index] ) } className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        { image?.map( ( image, i ) => (
                            <img
                                src={ urlFor( image ) }
                                alt=""
                                className={ i === index ? 'small-image selected-image' : 'small-image' }
                                key={ i }
                                onMouseEnter={ () => setIndex( i ) }
                            />
                        ) ) }
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{ name }</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{ details }</p>
                    <p className="price">{ price } EGB</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={ () => qty > 1 && setQty( qty - 1 ) }><AiOutlineMinus /></span>
                            <span className="num">{ qty }</span>
                            <span className="plus" onClick={ () => setQty( qty + 1 ) }><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={ () => onAdd( product, qty ) }>Add to Cart</button>
                        <button type="button" className="buy-now" onClick={ handleBuyNow }>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="sec_7 features container ">
                    <Slider { ...settings }>
                        { products?.map( ( item ) => (
                            <div key={ item._id } className="box quality item">
                                <Link href={ `/technology-product/${item.slug.current}` }>
                                    <div className="img-holder">
                                        <img src={ urlFor( item.image[0] ) } alt="" />
                                    </div>
                                </Link>
                                <h2>{ item.price } EGB</h2>
                                <Link href={ `/technology-product/${item.slug.current}` }>
                                    <p>{ item.details }</p>
                                </Link>
                                <button href="#" onClick={ () => onAdd( item, 1 ) }>
                                    Add To Cart <i className="fa fa-shopping-bag" aria-hidden="true" />
                                </button>
                            </div>
                        ) ) }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "sectionTwo"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch( query );

    const paths = [
        ...products.map( ( product ) => ( {
            params: {
                slug: product.slug.current,
            },
        } ) ),
    ];

    return {
        paths: [...paths],
        fallback: 'blocking',
    };
};

export const getStaticProps = async ( { params: { slug } } ) => {
    const query = `*[_type == "sectionTwo" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "sectionTwo"]';

    const product = await client.fetch( query );
    const products = await client.fetch( productsQuery );

    return {
        props: { products, product },
    }
}

export default ProductDetails
