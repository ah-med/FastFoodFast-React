import React from 'react';
import PropTypes from 'prop-types';


const Footer  = (props) => {
        const { name } = props;
        return (
            <footer id={name}>
                DeLite Fast Food copyright &copy; {(new Date()).getFullYear()}
            </footer>
        )
};

Footer.propTypes = {
    name: PropTypes.string,
};

export default Footer;
