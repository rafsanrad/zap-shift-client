import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const services = [
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: (
      <CiDeliveryTruck className="text-5xl p-2 rounded-full bg-linear-to-r from-[#EEEDFC] to-[#EEEDFC]" />
    ),
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl text-sm mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center shadow hover:shadow-lg transition hover:bg-primary hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
