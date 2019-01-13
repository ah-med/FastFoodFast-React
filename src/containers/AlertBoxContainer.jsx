import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AlertBox from '../components/common/AlertBox.jsx';
import closeAlert from '../actions/alertActions';

class AlertBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleCloseClick(event) {
        event.preventDefault();
        this.props.closeAlertAction(true);
    }

    render() {
        return (
            <AlertBox
                alertType={this.props.alertType}
                text={this.props.text}
                fields={this.props.fields}
                closeAlert={this.props.closeAlert}
                closeAlertOnClick={this.handleCloseClick}
            />
        )
    }
}

AlertBoxContainer.propTypes = {
    fields: PropTypes.object,
    alertType: PropTypes.string,
    text: PropTypes.string,
    closeAlert: PropTypes.bool,
    closeAlertAction:PropTypes.func,
};

const mapStateToProps = state => ({
    closeAlert: state.alert.closeAlert
});


const mapDispatchToProps = dispatch => ({
    closeAlertAction: (status) => dispatch(closeAlert(status))
});


export default connect(mapStateToProps, mapDispatchToProps)(AlertBoxContainer);
