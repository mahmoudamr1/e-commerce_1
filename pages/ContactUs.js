import React from 'react'

const ContactUs = () => {
    return (
        <>
            <>
                <div className="main-title">
                    <h2>CONTACT US</h2>
                </div>
                <div className="discount" id="discount">
                    <div className="form">
                        <div className="content">
                            <h2>Contact Us</h2>
                            <form action="">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                />
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                />
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Your Phone"
                                    name="mobile"
                                />
                                <textarea
                                    className="input"
                                    placeholder="Tell Us About Your Needs"
                                    name="message"
                                    defaultValue={ "" }
                                />
                                <input type="submit" defaultValue="Send" />
                            </form>
                        </div>
                    </div>
                    <div className="image">
                        <div className="content">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221000.7287600921!2d31.505782878827045!3d30.061624829476038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e0ddab0f343%3A0x56903015bfa480d!2s2B%20computer!5e0!3m2!1sar!2seg!4v1693237958903!5m2!1sar!2seg"
                                style={ { border: 0 } }
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
                <div className="contact_sec_2">
                    <div>
                        <img src="contact_1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="contact_2.jpg" alt="" />
                    </div>
                </div>
            </>

        </>
    )
}

export default ContactUs

