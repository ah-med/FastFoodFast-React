import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = (props) => {
    const {
        foodName,
        imageUrl,
        price,
        foodId,
        category
    } = props;
    return (
        <div className={`food-item-card ${category}`} align="center">
            <img
                src={imageUrl}
                alt={foodName}
            />
            <h4>{foodName}</h4>
            <span>{price}</span>
            <div className="action" id={foodId}>
                <div className="add-cart">
                    <button id="minus" onClick="removeItemFromCart(event)" className="minus click">-</button>
                    <input type="number" min="0" max="30" step="1" value="0" />
                    <button id="plus" onClick="addItemToCart(event)" className="plus click">+</button>
                </div>
                <a className="action-btn" href="Javascript:void(0);" onClick="orderNow(event)">Order Now</a>
            </div>
        </div>
    );
}


FoodCard.propTypes = {
    foodName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    foodId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
};


export default FoodCard;
