import React from 'react';
import NavBarContainer from '../../containers/NavBarContainer.jsx';
import Form from '../common/form/Form.jsx';
import FormInput from '../common/form/FormInput.jsx';
import SubmitButton from '../common/form/SubmitButton.jsx';
import '../../assets/css/addMeal.css';

const AddMealPage = (props) => {
    const {
        inputHandler,
        submitHandler,
        fileHandler,
        selectedValue,
        imageRef
    } = props;
    return (
        <div className="addMealPage">
            <NavBarContainer
                isAuth={true}
                type='admin'
            />
            <div id="main">
                <div className="container">
                    <div id="add-details">
                        <h3 className="text-center">Add a Meal</h3>
                        <Form
                            formName="menu-form"
                            handleFormSubmit={submitHandler}
                        >
                            <div className="form-right">
                                <div className="image-item">
                                    <label>Upload Image</label>
                                    <br />
                                    <input id="upload-image" onChange={fileHandler} className="form-input" type="file" name="file" accept="image/*" required />
                                </div>
                                <div>
                                    <img
                                        id="uploaded"
                                        ref={imageRef}
                                    />
                                </div>
                            </div>
                            <div className="form-left">
                                <FormInput
                                    labelName="Food Name"
                                    inputType="text"
                                    name="foodName"
                                    handleInputChange={inputHandler}
                                />
                                <FormInput
                                    labelName="Price"
                                    inputType="number"
                                    name="price"
                                    handleInputChange={inputHandler}
                                />
                                <div className="form-item">
                                    <label>Category</label>
                                    <br />
                                    <select id="category" name="category" value={selectedValue} onChange={inputHandler} className="form-input" required>
                                        <option value="Continental">Continental</option>
                                        <option value="Swallow">Swallow</option>
                                        <option value="Protein">Protein</option>
                                        <option value="Soup">Soup</option>
                                        <option value="Drinks">Drinks</option>
                                        <option value="Pastries">Pastries</option>
                                        <option value="Traditional">Traditional</option>
                                    </select>
                                </div>
                                <SubmitButton buttonValue="Add Meal" />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMealPage;
