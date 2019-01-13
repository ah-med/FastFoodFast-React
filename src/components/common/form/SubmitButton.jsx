import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
    const {
        buttonValue
    } = props;
    return (
        <div className="form-item text-center">
            <input className="form-btn action-btn" type="submit" value={buttonValue} />
        </div>
    );
}

SubmitButton.propTypes = {
    buttonValue: PropTypes.string.isRequired
};




export default SubmitButton;
