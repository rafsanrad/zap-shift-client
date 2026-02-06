import React from "react";
import {FaTruck} from "react-icons/fa"; // Example icons

const steps = [
  {
    icon: <FaTruck className="text-4xl text-primary" />,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaTruck className="text-4xl text-primary" />,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaTruck className="text-4xl text-primary" />,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaTruck className="text-4xl text-primary" />,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 w-11/12 mx-auto bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
