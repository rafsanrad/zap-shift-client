import { useState } from "react";

const tabs = [
  {
    id: "story",
    label: "Story",
    content:
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time."
  },
  {
    id: "mission",
    label: "Mission",
    content:
      "Our mission is to simplify logistics through innovation, transparency, and reliability. We aim to empower individuals and businesses with delivery solutions they can trust, backed by technology and a passionate support team."
  },
  {
    id: "success",
    label: "Success",
    content:
      "With thousands of successful deliveries completed across the country, our growth reflects the trust our customers place in us. Each milestone pushes us to raise the bar and deliver even better service every day."
  },
  {
    id: "team",
    label: "Team & Others",
    content:
      "Behind every successful delivery is a dedicated team of professionals working tirelessly. From operations to customer support, our people are the backbone of our service excellence."
  }
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-bold text-3xl my-5">About Us</h2>
        <p className="text-sm text-gray-500 my-5">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.<br/> From personal packages to business shipments — we deliver on time, every time.</p>
      {/* Tabs */}
      <div className="flex gap-8 border-b mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "text-lime-700 border-b-2 border-lime-700"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-gray-600 space-y-6">
        <p>{activeContent.content}</p>
      </div>
    </section>
  );
};

export default AboutUs;
