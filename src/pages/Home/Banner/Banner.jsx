import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} alt="Banner 1" />

        {/* Left bottom button */}
        <div className="absolute bottom-5 left-5 lg:bottom-20 lg:left-20 md:bottom-12 md:left-12">
          <button className="bg-primary px-2 md:px-6 md:py-2 rounded-full font-semibold">
            Track Your Parcel
          </button>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg2} alt="Banner 2" />

        <div className="absolute bottom-5 left-5 lg:bottom-20 lg:left-20 md:bottom-12 md:left-12">
          <button className="bg-primary px-2 md:px-6 md:py-2 rounded-full font-semibold">
            Track Your Parcel
          </button>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg3} alt="Banner 3" />

        <div className="absolute bottom-5 left-5 lg:bottom-20 lg:left-20 md:bottom-12 md:left-12">
          <button className="bg-primary px-2 md:px-6 md:py-2 rounded-full font-semibold">
            Track Your Parcel
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
