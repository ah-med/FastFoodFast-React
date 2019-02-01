import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpPage from '../components/auth/SignUpPage.jsx';
import Footer from '../components/common/Footer.jsx';
import signupUser from '../actions/signupActions';



class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
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
        const {signupAction, history} = this.props;
        const newUserData = Object.assign({}, this.state);
        signupAction(newUserData, history);
    }

    render() {
        return (
            <React.Fragment>
                <SignUpPage
                    submitSignupForm={this.submitFormHandler}
                    handleSignupInput={this.onChangeInputHandler}
                    error={this.props.error}
                    loading={this.props.loading}
                />
                <Footer name="signup-footer" />
            </React.Fragment>
        )
    }
}

SignupContainer.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    signupAction:PropTypes.func,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    error: state.auth.error,
    loading: state.loading.isLoading,
});

const mapDispatchToProps = dispatch => ({
    signupAction: (userData, history) => dispatch(signupUser(userData, history)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
