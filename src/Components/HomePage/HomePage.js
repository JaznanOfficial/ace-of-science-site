import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import Category from '../Category/Category';
import MagazineSlider from '../MagazineSlider/MagazineSlider';
import Achievement from '../Achievement/Achievement';
import Testimonials from '../Testimonials/Testimonials'
import ScrollToTop from "react-scroll-to-top";


const HomePage = () => {
    return (
        <div>
        <ScrollToTop smooth color='#FE1A00' viewBox="0 0 250 250" />
        <HeaderBanner></HeaderBanner>
        <Category></Category>
        <MagazineSlider></MagazineSlider>
        <Achievement></Achievement>
        <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;