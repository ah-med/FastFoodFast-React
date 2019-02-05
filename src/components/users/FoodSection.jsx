import React from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../common/FoodCard.jsx';

const FoodSection = (props) => {
    const {
        foodItems,
        sectionName,
    } = props;
    const foodItem = foodItems.map(food => (
        <FoodCard
            foodName={food.food_name}
            imageUrl={food.image_url}
            price={food.price}
            foodId={food.food_id}
            category={food.category}
            key={food.category}            
        />
    ));
    return (
        <React.Fragment>
            <div>
                <h4>{sectionName}</h4>
                <div id={sectionName} className="food-items">
                    {foodItem}
                </div>
            </div>
        </React.Fragment>
    )
}

FoodSection.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    sectionName: PropTypes.string.isRequired
};


export default FoodSection;
