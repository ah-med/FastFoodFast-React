import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodItems from '../components/users/FoodItems.jsx';
import PlaceOrderContainer from './PlaceOrderContainer.jsx';
import { getFoodItems } from '../actions/userFoodItemsActions';
import Loading from '../components/common/modals/Loading.jsx';

export class FoodItemsContainer extends Component {

    componentDidMount() {
        this.props.getAllFoodItems();
    }
    render() {
        return (
            <React.Fragment>
                <Loading isLoading={this.props.loading} />
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
    getAllFoodItems: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

const mapStateToProps = state => ({
    foodItems: state.foodItems.foodItems,
    loading: state.loading.isLoading
});

const mapDispatchToProps = dispatch => ({
    getAllFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemsContainer);
