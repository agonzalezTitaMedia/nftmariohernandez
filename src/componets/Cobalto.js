import React from "react";
import MainBtn from "./MainBtn";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Card from "./Card";

const Cobalto = () => {
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 100,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          autoplay:true,
          centermode:true,
          arrows:false
        };

    return (
        <div className="slide-wrap slide-wrap--zafiro">
            <div className="slide-col">
                <Slider {...settings} className="slide-wrapSlider">
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </Slider>
            </div>
            <div className="slide-col">
                <div className="slide-subTitle">Colección</div>
                <div className="slide-WrapCircle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2 className="slide-title">COBALTO</h2>
                <p className="slide-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                </p> 
                <MainBtn text={'Explorar NFTS'}></MainBtn>
            </div>
        </div>
    )
}

export default Cobalto