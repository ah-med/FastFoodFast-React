import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../containers/NavBarContainer.jsx';
import Form from '../common/form/Form.jsx';
import FormInput from '../common/form/FormInput.jsx';
import SubmitButton from '../common/form/SubmitButton.jsx';
import Modal from '../common/modals/Modal.jsx';
import Loading from '../common/modals/Loading.jsx';
import MobileSideNav from '../common/modals/MobileSideNav.jsx';
import '../../assets/css/signup.css';


const LoginPage = (props) => {
    const {
        submitLoginForm, handleLoginInput, loading
    } = props
    return (
        <React.Fragment>
            <Modal>
                <MobileSideNav />
                <Loading isLoading={loading} />
            </Modal>
            <NavBarContainer />
            <section id="signup">
                <Form formName="login-form" handleFormSubmit={submitLoginForm}>
                    <h3 className="text-center">Login</h3>
                    <FormInput
                        labelName="Email"
                        inputType="email"
                        name="email"
                        handleInputChange={handleLoginInput}
                    />
                    <FormInput
                        labelName="Password"
                        inputType="password"
                        name="password"
                        handleInputChange={handleLoginInput}
                    />
                    <SubmitButton buttonValue="Login" />
                    <div className="text-center">
                        <p>Already have an account ?
                        <Link className="orange" to="/signup"> Sign up </Link>
                        </p>
                    </div>
                </Form>
            </section>
        </React.Fragment>
    )
}

LoginPage.propTypes = {
    submitLoginForm: PropTypes.func.isRequired,
    handleLoginInput: PropTypes.func.isRequired,
    loading: PropTypes.bool
};


export default LoginPage;
