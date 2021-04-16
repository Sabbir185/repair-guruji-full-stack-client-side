import React from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <main>
            <HeaderNavbar></HeaderNavbar>
            <HeaderMain></HeaderMain>
            <HeaderCarousel></HeaderCarousel>
            <Services></Services>
            <Reviews></Reviews>
        </main>
    );
};

export default Home;