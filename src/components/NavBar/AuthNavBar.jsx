import React from 'react';
import PropTypes from 'prop-types';
import UserNavBar from './UserNavBar.jsx';
import AdminNavBar from './AdminNavBar.jsx';


const AuthNavBar = (props) => {
    const { role, totalCartItems } = props;
    return (

        (role === 'user') ?
        (
            <UserNavBar
             totalCartItems={totalCartItems}
            />
        ) 
        : 
        (
            < AdminNavBar
            />
        )
    )
}

AuthNavBar.propTypes = {
    role: PropTypes.string.isRequired,
    totalCartItems: PropTypes.number
};


export default AuthNavBar;
