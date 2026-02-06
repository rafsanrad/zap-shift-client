import React from "react";
import featureImg1 from "../../../assets/live-tracking.png";
import featureImg2 from "../../../assets/safe-delivery.png";
import featureImg3 from "../../../assets/tiny-deliveryman.png";

const features = [
  {
    img: featureImg1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img: featureImg2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: featureImg3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 border-t-2 border-b-2 border-dashed border-gray-300 mt-10 w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex items-center gap-6"
          >
            {/* Left Image */}
            <div className="w-1/4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-32 object-contain"
              />
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 h-24" />

            {/* Right Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeatureSection;
