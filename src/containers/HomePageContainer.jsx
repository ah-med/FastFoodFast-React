import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from '../components/home/HomePage.jsx';
import { getFoodItems } from '../actions/userFoodItemsActions';
import getPopularFoodItems from '../utilities/getPopularFoodItems';


export class HomePageContainer extends Component {

    componentDidMount() {
        this.props.getAllFoodItems();
    }
    render() {
        const popularFoodItems = getPopularFoodItems(this.props.foodItems.foodItems);
        return (
            <HomePage
                popularFoodItems={popularFoodItems}
            />
        )
    }
}

HomePageContainer.propTypes = {
    foodItems: PropTypes.arrayOf(PropTypes.object),
    getAllFoodItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    foodItems: state.foodItems
});

const mapDispatchToProps = dispatch => ({
    getAllFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
