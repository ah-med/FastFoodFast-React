import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/checkout.css';

const PlaceOrder = (props) => {
    const {
        closeModalHandler, 
        displayCart, 
        totalAmount, 
        placeOrderHandler,
        address,
        phoneNumber,
        inputChangeHandler
    } = props;
    return (
        <div id="checkoutModal" className={(displayCart) ? "modal":"modal hide"}>
            <div className="close text-right">
                <span className="click" onClick={closeModalHandler}>X</span>
            </div>
            <div id="total-amount">
                <div className="container">
                    <span>Your Cart</span> | Total amount: &#8358;
                <span id="amount">{totalAmount}</span>
                </div>
            </div>
            <div id="main-checkout">
                <div id="order-info">
                    <div className="container">
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
                </div>
                <div id="cart-items">
                </div>
            </div>
        </div> 
    )
}

PlaceOrder.propTypes = {
    foodItems: PropTypes.func,
};


export default PlaceOrder;



