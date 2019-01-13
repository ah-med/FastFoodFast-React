import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    render() {
        return (
            <section id="modals">
                {this.props.children}
            </section>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.array.isRequired
};




export default Modal;