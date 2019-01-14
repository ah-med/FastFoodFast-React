import React from 'react';
import PropTypes from 'prop-types';


const Loading = (props) => {
    const displayLoading = (props.isLoading) ? "modal show" : "modal hide";
    return (
        <div id="loadingModal" className={displayLoading}>
            <div id="loader" className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
                <span>LOADING</span>
            </div>
        </div>
    )
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
};


export default Loading;
