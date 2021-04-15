import React from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import HeaderMain from '../HeaderMain/HeaderMain';


const Home = () => {
    return (
        <main>
            <HeaderNavbar></HeaderNavbar>
            <HeaderMain></HeaderMain>
            <HeaderCarousel></HeaderCarousel>
        </main>
    );
};

export default Home;