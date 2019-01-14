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
import '../../assets/css/signup.css';


const LoginPage = (props) => {
    const {
        submitLoginForm, handleLoginInput, error, loading
    } = props
    return (
        <React.Fragment>
            <Modal>
                <MobileSideNav />
                <Loading isLoading={loading} />
            </Modal>
            <NavBar />
            <section id="signup">
                <Form formName="login-form" handleFormSubmit={submitLoginForm}>
                    <h3 className="text-center">Create an account</h3>
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
                        <p>Do not have an account ?
                        <Link className="orange" to="/signup"> Sign up</Link>
                        </p>
                    </div>
                </Form>
            </section>
            <AlertBoxContainer alertType={(error.description) ? "error":"undefined"} text={error.description} fields={error.fields} />
        </React.Fragment>
    )
}

LoginPage.propTypes = {
    submitLoginForm: PropTypes.func.isRequired,
    handleLoginInput: PropTypes.func.isRequired,
    error: PropTypes.any,
    loading: PropTypes.bool
};


export default LoginPage;
