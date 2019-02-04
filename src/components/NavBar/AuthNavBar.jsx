import React from 'react';
import PropTypes from 'prop-types';
import UserNavBar from './UserNavBar.jsx';
import AdminNavBar from './AdminNavBar.jsx';


const AuthNavBar = (props) => {
    const { role } = props;
    return (

        (role === 'user') ?
        (
            <UserNavBar
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
    role: PropTypes.string.isRequired
};


export default AuthNavBar;
