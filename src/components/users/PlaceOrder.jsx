import React from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../common/FoodCard.jsx';
import '../../assets/css/checkout.css';

const PlaceOrder = (props) => {
    const {
        closeModalHandler, 
        displayCart, 
        totalAmount, 
        placeOrderHandler,
        address,
        phoneNumber,
        inputChangeHandler,
        cartItems
    } = props;
    const cartItem = cartItems.map(food => (
        <FoodCard
            foodName={food.foodName}
            imageUrl={food.imageUrl}
            price={food.price}
            foodId={food.foodId}
            category={'Cart Items'}
            key={food.foodId}
            quantity={food.quantity}          
        />
    ));
    return (
        <div id="checkoutModal" className={(displayCart) ? "modal":"modal hide"}>
            <div className="close text-right">
                <span className="click" onClick={closeModalHandler}>X</span>
            </div>
            <div id="total-amount">
                <div className="container">
                    <span className='header text-center'>{`${cartItems.length} item(s) in your cart`}</span> | Total amount: &#8358;
                    <span id="amount">{totalAmount}</span>
                </div>
            </div>
            <div id="main-checkout">
                <div className="container">
                    <div id="order-info">
                            <form id="placeorder-form" onSubmit={placeOrderHandler}>
                                <fieldset>
                                    <legend>Delivery Details</legend>
                                    <div className="form-item">
                                        <label>Address</label>
                                        <br />
                                        <textarea id="address" name="address" className="form-input" onChange={inputChangeHandler} type="text" placeholder="No 1, abc street, city " required cols="30" rows="5" value={address}></textarea>
                                    </div>
                                    <div className="form-item">
                                        <label>Phone No</label>
                                        <br />
                                        <input id="phone-no" name="phoneNo" className="form-input" onChange={inputChangeHandler} type="tel" placeholder="+234-XX-XX-XX-XX-XX" required value={phoneNumber} />
                                    </div>
                                    <div className="form-item-submit">
                                        <input className="form-input action-btn submit-btn" type="submit" value="Place Order Now" />
                                    </div>
                                </fieldset>
                            </form>
                    </div>
                    <div id="cart-items">
                        {cartItem}
                    </div>
                </div>
            </div>
        </div> 
    )
}

PlaceOrder.propTypes = {
    foodItems: PropTypes.func,
    closeModalHandler: PropTypes.func.isRequired,
    displayCart: PropTypes.bool.isRequired,
    totalAmount: PropTypes.number,
    placeOrderHandler: PropTypes.func.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    inputChangeHandler: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default PlaceOrder;



