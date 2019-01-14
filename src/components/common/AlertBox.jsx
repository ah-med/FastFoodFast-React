import React from 'react';
import PropTypes from 'prop-types';

const AlertBox = (props) => {
    const { 
        alertType, 
        text, 
        fields,
        closeAlert,
        closeAlertOnClick
    } = props
    const alertClass = alertType + '-alert';
    const validationFields = (fields) => {
        const errorFields = Object.values(fields).map((item, index) => {
           return <li key={index}>{item}</li>
        });
        return errorFields;
    }
    return (
        <div id="alert" className={ (closeAlert) ? " hide":" show"}>
            <div id="alert-element" className={"alert " +alertClass}>
                <span className="close" onClick={closeAlertOnClick}>X</span>
                <div id="error-text">{text}</div>
                <div id="error-fields" align="left">{(fields) ? validationFields(fields):''}</div>
            </div>
        </div>
    );
}


AlertBox.propTypes = {
    alertType: PropTypes.string.isRequired,
    text: PropTypes.string,
    fields: PropTypes.object,
    closeAlert: PropTypes.bool.isRequired,
    closeAlertOnClick: PropTypes.func.isRequired
};


export default AlertBox;
