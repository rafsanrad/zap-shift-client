import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../Works/HowItWorks";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import FeatureSection from "../Feature/FeatureSection";
import CustomerPriority from "../Priority/CustomerPrority";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <FeatureSection></FeatureSection>
      <CustomerPriority></CustomerPriority>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
