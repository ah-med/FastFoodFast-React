import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, getQuantity } from '../../utilities/cart';
import updateCartItem from '../../actions/userOrderActions';


class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
          };

    }
    
    handleAddToCart = () => {
        const {
            foodName,
            foodId,
            imageUrl,
            price
        } = this.props
        const foodData = {
            foodName,
            foodId,
            imageUrl,
            price
        }
        const { cart } = this.props;
        const updatedCart = addToCart(cart, foodData);
        updateCartItem(updatedCart)
        this.setState({
            quantity: getQuantity(cart, foodId)
          });
    }

    handleRemoveFromCart = () => {
        const {
            foodName,
            foodId,
            imageUrl,
            price
        } = this.props
        const foodData = {
            foodName,
            foodId,
            imageUrl,
            price
        }
        const { cart } = this.props;
        const updatedCart = removeFromCart(cart, foodData);
        if (updatedCart) {
            updateCartItem(updatedCart)
            this.setState({
                quantity: getQuantity(cart, foodId)
            });
        } else {
            this.setState({
                quantity: 0
            });
        }
    };

    render() {
    const {
        foodName,
        imageUrl,
        price,
        foodId,
        category,
    } = this.props;
    return (
        <div className={`food-item-card ${category}`} align="center">
            <img
                src={imageUrl}
                alt={foodName}
            />
            <h4>{foodName}</h4>
            <span>&#8358;{price}</span>
            <div className="action" id={foodId}>
                <div className="add-cart">
                    <button id="minus" onClick={this.handleRemoveFromCart} className="minus click">-</button>
                    <input type="number" min="0" max="30" step="1" value={this.state.quantity} disabled />
                    <button id="plus" onClick={this.handleAddToCart} className="plus click">+</button>
                </div>
                <a className="action-btn" href="Javascript:void(0);" onClick="orderNow(event)">Order Now</a>
            </div>
        </div>
    );
    }
}

FoodCard.propTypes = {
    foodName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    foodId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.object)
};


const mapStateToProps = state => ({
    cart: state.cart.cart
});

export default connect(mapStateToProps, null)(FoodCard) ; 
