import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
    const {
        labelName, inputType, handleInputChange, name
    } = props;
    return (
        <div className="form-item">
            <label>{labelName}</label>
            <br />
            <input
                className="form-input"
                type={inputType}
                name={name}
                onChange={handleInputChange}
                placeholder={labelName}
                required />
        </div>
    );
}

FormInput.propTypes = {
    labelName: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};




export default FormInput;
