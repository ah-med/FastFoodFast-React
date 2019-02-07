import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlaceOrder from '../components/users/PlaceOrder.jsx';
import { toggleCheckOut, placeOrder } from '../actions/userOrderActions';



export class PlaceOrderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            phoneNo: ''
        }
    }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCloseModal = () => {
        this.props.checkOutCartAction();
    }

    handlePlaceOrder =  (event) => {
        event.preventDefault();
        const {cart} = this.props; 
        const orderDetails = {
            ...this.state,
            foodItems: [...cart].map(item => {
                return {
                    foodId: item.foodId,
                    quantity: item.quantity
                }
            })
        }
       this.props.placeOrderAction(orderDetails);
    }
    render() {
        return (
            <PlaceOrder
                closeModalHandler={this.handleCloseModal}
                displayCart={this.props.isCheckOut}
                totalAmount={this.props.totalAmount}
                placeOrderHandler={this.handlePlaceOrder}
                address={this.state.address}
                phoneNumber={this.state.phoneNo}
                inputChangeHandler={this.handleInputChange}
            />
        )
    }
}

PlaceOrderContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
    cart: state.cart,
    isCheckOut: state.cartStatus.isCheckOut,
    totalAmount: state.cartStatus.totalAmount
});

const mapDispatchToProps = dispatch => ({
    checkOutCartAction: () => dispatch(toggleCheckOut()),
    placeOrderAction: (cart) => dispatch(placeOrder(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderContainer);

