import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodItems from '../components/users/FoodItems.jsx';
import PlaceOrderContainer from './PlaceOrderContainer.jsx';
import { getFoodItems } from '../actions/userFoodItemsActions';

export class FoodItemsContainer extends Component {

    componentDidMount() {
        this.props.getAllFoodItems();
    }
    render() {
        return (
            <React.Fragment>
                <FoodItems
                    foodItems={this.props.foodItems}
                />
                <PlaceOrderContainer />
            </React.Fragment>
        )
    }
}

FoodItemsContainer.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object),
    getAllFoodItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    foodItems: state.foodItems.foodItems
});

const mapDispatchToProps = dispatch => ({
    getAllFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsContainer);
