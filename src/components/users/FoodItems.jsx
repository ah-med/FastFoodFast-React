import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer.jsx';
import NavBar from '../common/NavBar.jsx';
import FoodSection from './FoodSection.jsx';
import '../../assets/css/userFoodItems.css';
import getCategories from '../../utilities/getFoodCategories';

const FoodItems = (props) => {
    const {
        foodItems
    } = props;
    return (
        <React.Fragment>
            <NavBar />
            <section id="main">
                <section id="menu">
                    <h4 className="text-center" onClick="toggleDisplay('menu-container')">Menu</h4>
                    <div id="menu-container" className="container">
                        <nav id="menu-header">
                            <ul id="menu-list">
                                <li><a href="#Continental">Continental</a></li>
                                <li><a href="#Drinks">Drinks</a></li>
                                <li><a href="#Pastries">Pastries</a></li>
                                <li><a href="#Soup">Soup</a></li>
                                <li><a href="#Swallow">Swallow</a></li>
                                <li><a href="#Traditional">Traditional</a></li>
                                <li><a href="#Protein">Protein</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section id="food-menu">
                    <div className="container">
                        <div id="menu-body">
                            <FoodSection 
                                sectionName='Continental'
                                foodItems={getCategories(foodItems, 'Continental')}
                            />
                            <FoodSection 
                                sectionName='Drinks'
                                foodItems={getCategories(foodItems, 'Drinks')}
                            />
                            <FoodSection 
                                sectionName='Pastries'
                                foodItems={getCategories(foodItems, 'Pastries')}
                            />
                            <FoodSection 
                                sectionName='Soup'
                                foodItems={getCategories(foodItems, 'Soup')}
                            />
                            <FoodSection 
                                sectionName='Swallow'
                                foodItems={getCategories(foodItems, 'Swallow')}
                            />
                            <FoodSection 
                                sectionName='Traditional'
                                foodItems={getCategories(foodItems, 'Traditional')}
                            />
                            <FoodSection 
                                sectionName='Protein'
                                foodItems={getCategories(foodItems, 'Protein')}
                            />
                        </div>
                    </div>
                </section>
            </section>
            <Footer name="home-footer" />
        </React.Fragment>
    )
}

FoodItems.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object),
};


export default FoodItems;
