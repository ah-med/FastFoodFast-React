import React from 'react';

const PopularFoodItems = () => {
    return (
        <section id="popular">
        <div className="container">
            <h2>Popular Food Items</h2>
            <div id="food-item">
                <div id="no-orders" className="hide">
                    <h4>No Menu Items Yet.</h4>
                    <p>check back in a bit</p>
                </div>
            </div>
            <div id="view-order-div">
                <a className="action-btn" href="./user_food_items.html">View All Food Items</a>
            </div>
        </div>
    </section>
    )
}

export default PopularFoodItems;
