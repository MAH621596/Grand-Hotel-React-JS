import React from 'react';
import { Button } from '../ui/button';
import imgInfo from "../../assets/images/about-us-img-1.jpeg";

const Info: React.FC = () => {
    return (
        <>
            <section className="about-us info_section" style={{ backgroundColor: "rgb(58, 129, 105, 0.62)" }}>
                <div className="about-us-content">
                    <h1 className="about-us-heading">About Us</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>

                    <h3 className="sub-heading">Grand Hotel</h3>
                    <p className="about-us-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis illum id nemo vel quas fugit labore nobis voluptatum totam vero.</p>
                    <Button className="about-us-btn">
                        Read More<i className="fa fa-angle-double-right btn-arrow"></i>
                    </Button>
                </div>

                <div className="about-us-images">
                    <img src={imgInfo} className="image image1" />

                </div>
            </section>
        </>
    )
}

export default Info;
