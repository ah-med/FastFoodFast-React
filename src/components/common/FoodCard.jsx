import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { toastrOptions } from '../../actions/constants';
import { toggleCheckOut, addCartItem, removeCartItem } from '../../actions/userOrderActions';
import getTotalAmount from '../../utilities/cart';


export class FoodCard extends Component {
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
            price,
            addCartItemAction
        } = this.props
        const foodData = {
            foodName,
            foodId,
            imageUrl,
            price
        }
        this.setState({
            quantity: this.state.quantity + 1
        }, () => {
            const quantity = this.state.quantity;
            addCartItemAction({...foodData, quantity})
        })
    }

    handleRemoveFromCart = () => {
        const {
            foodName,
            foodId,
            imageUrl,
            price,
            addCartItemAction,
            removeCartItemAction
        } = this.props
        const foodData = {
            foodName,
            foodId,
            imageUrl,
            price
        };
        if (this.state.quantity <= 1) {
            this.setState({
                quantity: 0
            }, () => {
                removeCartItemAction(foodData);
            })
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            }, () => {
                const quantity = this.state.quantity;
                addCartItemAction({...foodData, quantity})
            })
        }
    };

    handleOrderNow = () => {
        const { cart } = this.props;
        if (cart.length === 0) {
            toastr.success('Please add at least one item to the cart');
            toastr.options = toastrOptions;
        } else {
            const totalAmount = getTotalAmount([...cart])
            this.props.checkOutCartAction(totalAmount)
        }
    }

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
                        <span>{this.state.quantity}</span>
                        <button id="plus" onClick={this.handleAddToCart} className="plus click">+</button>
                    </div>
                    <a className="action-btn" href="Javascript:void(0);" onClick={this.handleOrderNow}>Checkout</a>
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
    cart: PropTypes.arrayOf(PropTypes.object),
    checkOutCartAction: PropTypes.func
};


const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    checkOutCartAction: (totalAmount) => dispatch(toggleCheckOut(totalAmount)),
    addCartItemAction:  (item) => dispatch(addCartItem(item)),
    removeCartItemAction:  (item) => dispatch(removeCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodCard); 
