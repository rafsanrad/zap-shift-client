import React from "react";
import prorityImg from "../../../assets/location-merchant.png";
import bgImg from "../../../assets/be-a-merchant-bg.png"

const CustomerPriority = () => {
  return (
    <section className="py-20 bg-secondary w-11/12 mx-auto rounded-3xl bg-no-repeat"
    style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="max-w-6xl mx-auto px-4
                      flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left content */}
        <div className="md:w-1/2 ml-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  text-white">
            Order Food Anytime, Anywhere
          </h2>

          <p className="text-white/80 mb-6 leading-relaxed">
            Choose from thousands of restaurants and get your favorite meals
            delivered fast and fresh right to your doorstep with real-time
            tracking.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-black rounded-full font-semibold transition">
              Become a Merchant
            </button>
            <button className="px-6 py-3 border text-primary border-primary rounded-full font-semibold transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img
            src={prorityImg}
            alt="Feature"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default CustomerPriority;
