import React from 'react';
import PropTypes from 'prop-types';
import IntroSection from './IntroSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import PopularFoodItems from './PopularFoodItems.jsx';
import FoodCategoriesList from './FoodCategoriesList.jsx';
import Footer from '../common/Footer.jsx';
import NavBar from '../common/NavBar.jsx';
import '../../assets/css/index.css';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <IntroSection />
            <HowItWorks />
            <PopularFoodItems 
                foodItems={props.popularFoodItems}
            />
            <FoodCategoriesList />
            <Footer name="home-footer" />
        </React.Fragment>
    )
}

HomePage.propTypes = {
    popularFoodItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
