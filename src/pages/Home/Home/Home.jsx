import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../Works/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import FeatureSection from '../Feature/FeatureSection';
import CustomerPriority from '../Priority/CustomerPrority';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Brands></Brands>
            <FeatureSection></FeatureSection>
            <CustomerPriority></CustomerPriority>
        </div>
    );
};

export default Home;