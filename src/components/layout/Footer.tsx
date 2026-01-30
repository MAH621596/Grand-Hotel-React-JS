import React from 'react';
import galleryImg1 from "../../assets/images/gallery-img-1.jpeg";
import galleryImg2 from "../../assets/images/gallery-img-2.jpeg";
import galleryImg3 from "../../assets/images/gallery-img-3.jpeg";
import galleryImg4 from "../../assets/images/gallery-img-4.jpeg";
import galleryImg5 from "../../assets/images/gallery-img-5.jpeg";
import { Button } from '../ui/button';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
                <div className="main-part">
                    <div className="footer-list-wrapper">
                        <h3 className="footer-heading">Grand_Hotel</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    support@grandhotel.com
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    New York, Main Street 123
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Tel: +123 456 789
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list-wrapper">
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Home
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    About Us
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Rooms
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Events
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Customers
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="#" className="footer-list-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact">
                        <h3 className="footer-heading">Contact</h3>
                        <p>Sign Up For News</p>
                        <form className="footer-form">
                            <input type="email" placeholder="Your Email..." className="footer-input" />                           
                            <Button className="footer-btn">
                                Sign Up
                            </Button>
                        </form>
                    </div>

                    <div className="gallery">
                        <h3 className="footer-heading">Gallery</h3>
                        <div className="gallery-images">

                            <div className="image-wrapper">
                                <img src={galleryImg1} className="footer-img" />
                            </div>

                            <div className="image-wrapper">
                                <img src={galleryImg2} className="footer-img" />
                            </div>

                            <div className="image-wrapper">
                                <img src={galleryImg3} className="footer-img" />
                            </div>

                            <div className="image-wrapper">
                                <img src={galleryImg3} className="footer-img" />
                            </div>

                            <div className="image-wrapper">
                                <img src={galleryImg4} className="footer-img" />
                            </div>

                            <div className="image-wrapper">
                                <img src={galleryImg5} className="footer-img" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="creator-part">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018. Grand Hotel. All Rights Reserved</p>
                    </div>

                    <div className="text-right">
                        <p>Made With<i className="fa fa-heart"></i>by <span>Maha Khan</span></p>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;
