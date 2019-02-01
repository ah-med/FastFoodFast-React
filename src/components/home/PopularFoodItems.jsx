import React from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../common/FoodCard.jsx';


const PopularFoodItems = (props) => {
    let {
        foodItems
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
        <section id="popular">
            <div className="container">
                <h2>Popular Food Items</h2>
                <div id="food-item">
                    {(foodItems.length > 0)
                        ? foodItem :
                        (
                            <div className="small-spinner"></div>
                        )
                    }
                </div>
                <div id="view-order-div">
                    <a className="action-btn" href="./fooditems">View All Food Items</a>
                </div>
            </div>
        </section>
    )
}

PopularFoodItems.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PopularFoodItems;
