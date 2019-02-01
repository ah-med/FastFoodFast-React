import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodItems from '../components/users/FoodItems.jsx';
import { getFoodItems } from '../actions/userFoodItemsActions';

class FoodItemsContainer extends Component {

    componentDidMount() {
        this.props.getAllFoodItems();
    }
    render() {
        return (
            <FoodItems
                foodItems={this.props.foodItems.foodItems}
            />
        )
    }
}

FoodItemsContainer.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object),
    getAllFoodItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    foodItems: state.foodItems
});

const mapDispatchToProps = dispatch => ({
    getAllFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsContainer);
