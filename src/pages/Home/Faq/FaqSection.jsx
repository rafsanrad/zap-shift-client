import FaqCard from "./FaqCard";


const faqData = [
  {
    question: "How long does the service take?",
    answer:
      "Most services are completed within 24–48 hours, depending on the service type and your location. You’ll receive real-time updates once your request is confirmed."
  },
  {
    question: "Is there any warranty or service guarantee?",
    answer:
      "Yes! We offer a service guarantee to ensure quality and customer satisfaction. If you face any issues related to our service, we’ll fix it at no additional cost within the guarantee period."
  },
  {
    question: "How can I book or request the service?",
    answer:
      "You can easily book our service through our website by selecting the service you need, choosing a convenient time, and confirming your request. Our support team is also available if you need assistance."
  }
];

const FaqSection = () => {
  return (
    <section className="max-w-4xl mx-auto p-10 space-y-4">
        <div className="text-center ">
            <h3 className="text-3xl font-bold my-5">Frequently Asked Question (FAQ)</h3>
            <p className="text-sm text-gray-500">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
      {faqData.map((item, index) => (
        <FaqCard
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default FaqSection;
