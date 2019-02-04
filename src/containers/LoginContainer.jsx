import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from '../components/auth/LoginPage.jsx';
import Footer from '../components/common/Footer.jsx';
import { loginUser } from '../actions/authActions';



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
            <React.Fragment>
                <LoginPage
                    submitLoginForm={this.submitFormHandler}
                    handleLoginInput={this.onChangeInputHandler}
                    loading={this.props.loading}
                />
                <Footer name="signup-footer" />
            </React.Fragment>
        )
    }
}

LoginContainer.propTypes = {
    loading: PropTypes.bool,
    loginAction:PropTypes.func,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    loading: state.loading.isLoading
});

const mapDispatchToProps = dispatch => ({
    loginAction: (userData, history) => dispatch(loginUser(userData, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
