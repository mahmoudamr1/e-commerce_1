import Link from 'next/link'
import React from 'react'

const Footer_2 = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <h3>2B</h3>
                        <ul className="social">
                            <li>
                                <a href="#" className="facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="youtube">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                        <p className="text">
                            <i className="far fa-check-circle" /> Maintenance Center to help you
                            <br />
                            <i className="far fa-check-circle" /> More than 50 Stores at your
                            service anywhere
                            <br />
                            <i className="far fa-check-circle" /> Buy Online or Pickup in Store
                            <br />
                            <i className="far fa-check-circle" /> Super Fast Shipping
                        </p>
                    </div>
                    <div className="box">
                        <ul className="links">
                            <li>
                                <a href="#">
                                    <i className="fas fa-angle-double-right" />
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/contact.html">
                                    <i className="fas fa-angle-double-right" />
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mahmoudamr700@gmail.com">
                                    <i className="fas fa-angle-double-right" />
                                    EMAIL: INFO@2B.COM.EG
                                </a>
                            </li>
                            <li>
                                <Link href="/Blog">
                                    <i className="fas fa-angle-double-right" />
                                    OUR BLOG
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-angle-double-right" />
                                    PROFILE
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="line">
                            <i className="fas fa-map-marker-alt fa-fw" />
                            <div className="info">Egypt, Cairo, Benha </div>
                        </div>
                        <div className="line">
                            <i className="far fa-clock fa-fw" />
                            <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                            <i className="fas fa-phone-volume fa-fw" />
                            <div className="info">
                                <span>+201125402033</span>
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">Made By MAHMOUD</p>
            </div>

        </>
    )
}

export default Footer_2
