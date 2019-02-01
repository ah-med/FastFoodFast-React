import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Footer extends Component {
    render() {
        const { name } = this.props;
        return (
            <footer id={name}>
                DeLite Fast Food copyright &copy; {(new Date()).getFullYear()}
            </footer>
        )
    }
}

Footer.propTypes = {
    name: PropTypes.string,
};

export default Footer;
