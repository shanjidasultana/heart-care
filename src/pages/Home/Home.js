import React from 'react';
import Banner from '../../components/Banner/Banner';
import Department from '../Department/Department';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Department></Department>
           <Services></Services>
        </div>
    );
};

export default Home;