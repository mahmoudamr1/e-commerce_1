

'use client'


import { useEffect, useState } from 'react';


import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { BsListNested } from 'react-icons/bs';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
// import { urlFor } from '../lib/client';
import getStripe from '../Lib/getStripe';
import { urlFor } from '../Lib/client';
const Navbar = () => {
  

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch( '/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( cartItems ),
    } );

    if ( response.statusCode === 500 ) return;

    const data = await response.json();

    toast.loading( 'Redirecting...' );

    stripe.redirectToCheckout( { sessionId: data.id } );
  }



  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove, showCart,setCartItems,setTotalPrice,setTotalQuantities, } = useStateContext();

useEffect(() => {
    var openPopupButton = document.getElementById("openPopupButton");

    if (showCart) {
      openPopupButton.style.color = "#f36f21";
    } else {
      openPopupButton.style.color = "black";
    }
  }, [showCart, setShowCart]);


const [showList, setShowList] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 967) {
        setShowList(false);
      } else {
        setShowList(true);
      }
    };

    // تفعيل الكود عند تحميل الصفحة أيضًا
    handleResize();

    // إضافة حدث استماع لتغيير حجم النافذة
    window.addEventListener('resize', handleResize);

    // إزالة الحدث عند تفريغ المكون
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowCart]);

  
  
useEffect(() => {
  var list = document.getElementById("header");
 

    if ( showList ) {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }

}, [showList, setShowList]);

  
   const listRef = useRef(null);
  useEffect( () => {
  
      function handleClickOutside( event ) {
        if ( window.innerWidth <= 967 ) {
          if ( listRef.current && !listRef.current.contains( event.target ) ) {
            // قام المستخدم بالنقر خارج القائمة، لذا قم بإغلاقها
            setShowList( false );
          }
        }
      }

      // أضف مُستمع الحدث للنقر خارج القائمة
      document.addEventListener( 'mousedown', handleClickOutside );

      return () => {
        // قم بإزالة مُستمع الحدث عند توقف الكومبوننت
        document.removeEventListener( 'mousedown', handleClickOutside );
      };
   
  }, [setShowList]);

  


  useEffect(() => {


  // تخزين الدالة المستخدمة عند إضافة الحدث
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // إضافة الحدث واستخدام الدالة المخزنة
  window.addEventListener("scroll", handleScroll);
var scrollToTopButton = document.getElementById( "scrollToTopButton" );

scrollToTopButton.addEventListener( "click", function () {
    window.scrollTo( {
        top: 0,
        behavior: "smooth" // التمرير بشكل ناعم
    } );
} );
  // تنظيف الحدث عند تفريغ المكون
  return () => {
    // إزالة الحدث باستخدام نفس الدالة المستخدمة
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  
  const handleDeleteAll = () => {
    setCartItems([]);
    setTotalPrice( 0 )
    setTotalQuantities(0)
  };

  
return (
  <>
    <button id="scrollToTopButton">
      <i className="fas fa-arrow-circle-up" />
    </button>
    <div className="banner_1">
      <h1>
        <span>12 Months</span> Bank Installment With{" "}
        <span>0% Down payment 0% Interest</span>
      </h1>
    </div>
    <div className="banner_2">
      <div className="div1-banner_2">
        {/* <h3 className='sign-in-navbar'>
          <a href="#">SIGN IN</a>
        </h3>
        <h3 className="craeate-account">
          <Link href="/CreateAccount">CREATE AN ACCOUNT</Link>
        </h3> */}
        <div>
          <Link href="/CreateAccount"> ACCOUNT <i class="fa-solid fa-user"></i></Link>
        </div>
      </div>
      <div className="contact_div1-banner_2">
        <Link href="/ContactUs">
         CONTACT US <i class="fa-solid fa-phone"></i>
        </Link>
      </div>
      <div>
        <a href="">
          <img src="/en.png" alt="" /> ENGLISH
        </a>
      </div>
    </div>
    <div className="nav_1">
      <div>
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="div2-nav_1">
        <form action="">
          <input
            id="search"
            type="text"
            placeholder="SEARCH"
            className="input-text"
          />
          <button type="submit" title="Search" className="action_search">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>
      <div className="div3-nav_1" >
        <div className='container-list-icon-nav' onClick={()=>setShowList(!showList)}>
      <BsListNested style={{width:'30px' , height: '100%' }} className='list-icon-nav' /></div>
        <button type="button" onClick={() => setShowCart(true)} className="cart-icon">
          <AiOutlineShopping id="openPopupButton" />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && (
          <div className="main-card" id="popup">
            <div className="close_card_button"   onClick={() => setShowCart(false)}>
              <i className="fas fa-times-circle" />
            </div>
            <div className="cards">
              <div className="div_1-card">
                <div className="total-card">
                  Cart Subtotal : <span> EGP : {totalPrice}</span>
                </div>
                <div className="items-card_1">{totalQuantities} items</div>
              </div>
              {cartItems.length > 0 && (
                <div className="div_2-card">
                  <div className="btn-container">
                    <button type="button" className="btn" onClick={handleCheckout}>
                      Pay with Stripe
                    </button>
                  </div>
                </div>
              )}
              <div className="all-cards">
                <div className="sum-cards">
                  {cartItems.length < 1 && (
                    <div className="empty-cart">
                      <AiOutlineShopping size={150} />
                      <h3>Your shopping bag is empty</h3>
                      <Link href="#">
                        <button
                          type="button"
                          onClick={() => setShowCart(false)}
                          className="btn"
                        >
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  )}
               {cartItems.length >= 1 &&
  cartItems.map((item) => (
    <div className="product" key={item._id}>
      { item.image[0] && (
        <img src={urlFor(item.image[0])} alt="" className="cart-product-image" />
      )}
      <div className="item-desc">
        <div className="flex top">
          <h5>{item.name}</h5>
          <h4>{item.price} EGB</h4>
        </div>
        <div className="flex bottom">
          <div>
            <p className="quantity-desc">
              <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                <AiOutlineMinus />
              </span>
              <span className="num">{item.quantity}</span>
              <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button
            type="button"
            className="remove-item"
            onClick={() => onRemove(item)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  ))
}

                </div>
              </div>
              <div className="view-card"onClick={handleDeleteAll}>
       
                <button>Delete All</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="header slide-in" id="header" ref={ listRef } >
       <div className="close_list_button"   onClick={() => setShowList(false)}>
              <i className="fas fa-times-circle" />
            </div>
      <div className="container-header">
        <ul className="main-nav">
          <li className="main-nav-logo">
            <a href="#" className="logo">
              <img src="/logo.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" id="COMPUTERS">
              COMPUTERS
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <div className="mega-menu container" id="mega-menu_1">
              <ul className="links">
                <li>
                  <a href="#">LAPTOPS</a>
                </li>
                <li>
                  <a href="#">PRINTERS</a>
                </li>
                <li>
                  <a href="#">Storage</a>
                </li>
                <li>
                  <a href="#">Electronic Solutions</a>
                </li>
                <li>
                  <a href="#">Desktops</a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="#">Build Your PC</a>
                </li>
                <li>
                  <a href="#">HP</a>
                </li>
                <li>
                  <a href="#">LENOVO</a>
                </li>
                <li>
                  <a href="#"> DELL</a>
                </li>
                <li>
                  <a href="#">ASUS</a>
                </li>
              </ul>
            </div>
          </li>
          <li className='relative '>
            <a href="#" id="mobile">
              MOBILE &amp; TABLET
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <div className="mega-menu container absolute" id="mega-menu_2">
              <ul className="links">
                <li>
                  <a href="#">
                    MOBILE PHONES{ " " }
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">APPLE</a>
                </li>
                <li>
                  <a href="#">SAMSUNG</a>
                </li>
                <li>
                  <a href="#">HUAWEI</a>
                </li>
                <li>
                  <a href="#">OPPO</a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="#">
                    TABLETS MOBILE PHONES{ " " }
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">HUAWIE</a>
                </li>
                <li>
                  <a href="#">APPLE</a>
                </li>
                <li>
                  <a href="#"> SAMSUNG</a>
                </li>
                <li>
                  <a href="#">LENOVE</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              GAMING
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              HOME APPLIANCES
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              ACCESSORIES
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">CORPORATE</a>
          </li>
          <li>
            <a href="#">SOLUTIONSDEALS</a>
          </li>

          {/* test */}
          <li className="nav-button1">
            <a href="#" className="icon" onClick="myFunction()">
              <i className="fa fa-bars" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);



  
};


export default Navbar;


