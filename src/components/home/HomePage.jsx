import React from 'react';
import IntroSection from './IntroSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import PopularFoodItems from './PopularFoodItems.jsx';
import FoodCategoriesList from './FoodCategoriesList.jsx';
import Footer from '../common/Footer.jsx';
import NavBar from '../common/NavBar.jsx';
import '../../assets/css/index.css';

const HomePage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <IntroSection />
            <HowItWorks />
            <PopularFoodItems />
            <FoodCategoriesList />
            <Footer name="home-footer" />
        </React.Fragment>
    )
}

export default HomePage;
