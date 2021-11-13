import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import Footer from '../../Footer/Footer';
import ReviewContainer from '../../Dashboard/Client/ReviewContainer/ReviewContainer';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>            
        <Navigation></Navigation>
        <Banner></Banner>
        <HomeCars></HomeCars>
        <ReviewContainer></ReviewContainer>
        <AboutUs></AboutUs>
        <Footer></Footer>
        </div>
    );
};

export default Home;