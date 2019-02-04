// this navbar container will render the three types of navigation bar based
// the application State 
// * if the user is a normal user 
//     * the role value in the state should be user
//     * their should be a token in the localStorage
//     * * display UserAuthNavBar
// * if the user is admin
//     * the role value in the state should be an admin
//     * their should be a token in the localStorage
//     * * display AdminAuthNavBar
// * if the role value is not set or no token in localStorage
//     * display NoAuthNavBar

// get role=‘user’, totalCartItems and isAuthenticated=true
// get the role 
 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthNavBar from '../components/NavBar/AuthNavBar.jsx';
import NoAuthNavBar from '../components/NavBar/NoAuthNavBar.jsx';


class NavBarContainer extends Component {

    render() {
        const {
            isAuthenticated, userRole
        } = this.props;
        return (

            (isAuthenticated) ?
            (
                <AuthNavBar
                    role={userRole} 
                />
            ) 
            : 
            (
                < NoAuthNavBar
                />
            )
        )
    }
}

NavBarContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userRole: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userRole: state.auth.role
});

const mapDispatchToProps = dispatch => ({
    // getAllFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);

