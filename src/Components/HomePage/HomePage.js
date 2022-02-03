import React from 'react';
import HeaderBanner from '../Header/HeaderBanner';
import Category from '../Category/Category';
import MagazineSlider from '../MagazineSlider/MagazineSlider';
import Achievement from '../Achievement/Achievement';
import Testimonials from '../Testimonials/Testimonials'


const HomePage = () => {
    return (
        <div>
        <HeaderBanner></HeaderBanner>
        <Category></Category>
        <MagazineSlider></MagazineSlider>
        <Achievement></Achievement>
        <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;