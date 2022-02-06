import React from "react";
import HeaderBanner from "../../Components/Header/HeaderBanner";
import Category from "../../Components/Category/Category";
import MagazineSlider from "../../Components/MagazineSlider/MagazineSlider";
import Achievement from "../../Components/Achievement/Achievement";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
            <MessengerCustomerChat pageId="103023455276751" appId="1147330332685692" />
            <HeaderBanner > </HeaderBanner>
            <Category></Category>
            <MagazineSlider></MagazineSlider>
            <Achievement></Achievement>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;
