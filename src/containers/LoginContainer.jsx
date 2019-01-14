import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from '../components/auth/LoginPage.jsx';
import signupUser from '../actions/loginActions';



class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    onChangeInputHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitFormHandler(event) {
        event.preventDefault();
        const {loginAction, history} = this.props;
        const newUserData = Object.assign({}, this.state);
        loginAction(newUserData, history);
    }

    render() {
        return (
            <LoginPage
                submitLoginForm={this.submitFormHandler}
                handleLoginInput={this.onChangeInputHandler}
                error={this.props.error}
                loading={this.props.loading}
            />
        )
    }
}

LoginContainer.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    loginAction:PropTypes.func,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    error: state.auth.error,
    loading: state.loading.isLoading,
});

const mapDispatchToProps = dispatch => ({
    loginAction: (userData, history) => dispatch(signupUser(userData, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
