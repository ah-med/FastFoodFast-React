import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
    const {children, handleFormSubmit} = props;
        return (
            <div className="container">
                <form id={props.formName} onSubmit={handleFormSubmit}>
                    {children}
                </form>
            </div>
        );
}

Form.propTypes = {
    formName: PropTypes.string.isRequired,
    children: PropTypes.any,
    handleFormSubmit: PropTypes.func.isRequired
};




export default Form;
