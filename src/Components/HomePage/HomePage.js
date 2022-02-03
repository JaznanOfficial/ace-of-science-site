import React from "react";
import HeaderBanner from "../Header/HeaderBanner";
import Category from "../Category/Category";
import MagazineSlider from "../MagazineSlider/MagazineSlider";
import Achievement from "../Achievement/Achievement";
import Testimonials from "../Testimonials/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const HomePage = () => {
    return (
        <div>
            <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
            <MessengerCustomerChat pageId="103023455276751" appId="1147330332685692" htmlRef="<REF_STRING>" />
            <HeaderBanner></HeaderBanner>
            <Category></Category>
            <MagazineSlider></MagazineSlider>
            <Achievement></Achievement>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;
