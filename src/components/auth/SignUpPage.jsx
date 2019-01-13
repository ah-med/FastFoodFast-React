import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../common/NavBar.jsx';
import Form from '../common/form/Form.jsx';
import FormInput from '../common/form/FormInput.jsx';
import SubmitButton from '../common/form/SubmitButton.jsx';
import Modal from '../common/modals/Modal.jsx';
import Loading from '../common/modals/Loading.jsx';
import MobileSideNav from '../common/modals/MobileSideNav.jsx';
import AlertBoxContainer from '../../containers/AlertBoxContainer.jsx';
// import AlertBox from '../common/AlertBox.jsx';
import '../../assets/css/signup.css';


const SignUpPage = (props) => {
    const {
        submitSignupForm, handleSignupInput, error, loading
    } = props
    return (
        <React.Fragment>
            <Modal>
                <MobileSideNav />
                <Loading isLoading={loading} />
            </Modal>
            <NavBar />
            <section id="signup">
                <Form formName="signup-form" handleFormSubmit={submitSignupForm}>
                    <h3 className="text-center">Create an account</h3>
                    <FormInput
                        labelName="First Name"
                        inputType="text"
                        name="firstName"
                        handleInputChange={handleSignupInput}
                    />
                    <FormInput
                        labelName="Last Name"
                        inputType="text"
                        name="lastName"
                        handleInputChange={handleSignupInput}
                    />
                    <FormInput
                        labelName="Email"
                        inputType="email"
                        name="email"
                        handleInputChange={handleSignupInput}
                    />
                    <FormInput
                        labelName="Password"
                        inputType="password"
                        name="password"
                        handleInputChange={handleSignupInput}
                    />
                    <SubmitButton buttonValue="Sign up" />
                    <div className="text-center">
                        <p>Already have account ?
                        <Link className="orange" to="/login"> Sign in</Link>
                        </p>
                    </div>
                </Form>
            </section>
            <AlertBoxContainer alertType={(error.description) ? "error":"undefined"} text={error.description} fields={error.fields} />
        </React.Fragment>
    )
}

SignUpPage.propTypes = {
    submitSignupForm: PropTypes.func.isRequired,
    handleSignupInput: PropTypes.func.isRequired,
    error: PropTypes.any,
    loading: PropTypes.bool
};


export default SignUpPage;
