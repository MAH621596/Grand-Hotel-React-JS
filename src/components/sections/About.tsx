import React from 'react'
import img1 from "../../assets/images/about-us-img-1.jpeg";
import img2 from "../../assets/images/about-us-img-2.jpeg";
import img3 from "../../assets/images/about-us-img-3.jpeg";
import img4 from "../../assets/images/about-us-img-4.jpeg";
import { Button } from '../ui/button';

const About: React.FC = () => {
    return (
        <>
            <section className="about-us">
                <div className="about-us-content">
                    <h1 className="about-us-heading">About Us</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>

                    <h3 className="sub-heading">Grand Hotel</h3>
                    <p className="about-us-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis illum id nemo vel quas fugit labore nobis voluptatum totam vero.</p>
                    <Button className="about-us-btn">
                        Read More
                        <i className="fa fa-angle-double-right btn-arrow"></i>
                    </Button>
                </div>

                <div className="about-us-images">
                    <img src={img1} className="image image1" />
                    <img src={img2} className="image image2" />
                    <img src={img3} className="image image3" />
                    <img src={img4} className="image image4" />
                </div>
            </section>
        </>
    )
}

export default About;
