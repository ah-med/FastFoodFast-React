import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthNavBar from '../components/NavBar/AuthNavBar.jsx';
import NoAuthNavBar from '../components/NavBar/NoAuthNavBar.jsx';


export class NavBarContainer extends Component {

    render() {
        const {
            isAuthenticated, userRole, totalCartItems
        } = this.props;
        return (

            (isAuthenticated) ?
            (
                <AuthNavBar
                    role={userRole} 
                    totalCartItems={totalCartItems}
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
    userRole: PropTypes.string.isRequired,
    totalCartItems: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userRole: state.auth.role,
    totalCartItems: state.cart.cart.length
});

export default connect(mapStateToProps, null)(NavBarContainer);

