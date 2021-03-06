import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel';
import HeaderMain from '../HeaderMain/HeaderMain';
import ProjectShow from '../ProjectShow/ProjectShow';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Specialist from '../Specialist/Specialist';


const Home = () => {
    return (
        <main>
            <HeaderNavbar></HeaderNavbar>
            <HeaderMain></HeaderMain>
            <HeaderCarousel></HeaderCarousel>
            <Services></Services>
            <Reviews></Reviews>
            <ProjectShow></ProjectShow>
            <Specialist></Specialist>
            <Footer></Footer>
        </main>
    );
};

export default Home;