import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';

const Home = () => {
    return (
        <div>            
        <Navigation></Navigation>
        <Banner></Banner>
        <HomeCars></HomeCars>
        </div>
    );
};

export default Home;