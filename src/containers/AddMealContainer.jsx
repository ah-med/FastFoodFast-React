import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddMealPage from '../components/admin/AddMealPage.jsx';
import Footer from '../components/common/Footer.jsx';
import uploadImageCloudinary from '../utilities/cloudinaryUpload';
import addMeal from '../actions/adminActions';



class AddMealContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName:'',
            price:'',
            category:'Continental',
            imageUrl:'',
            base64Url:''
        };
        this.uploadedImageRef = React.createRef();
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
    }

    onChangeInputHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

   async submitFormHandler(event) {
        event.preventDefault();
        const { addMealAction } = this.props;
        const imageUrl = await uploadImageCloudinary(this.state.base64Url);
        this.setState({ ['imageUrl']: imageUrl });
        addMealAction(this.state);
    }

    fileChangeHandler(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const displayUrl = event.target.result;
                this.uploadedImageRef.current.setAttribute('src', displayUrl);
                this.setState({ base64Url: displayUrl });
            }
            reader.readAsDataURL(event.target.files[0]);

          }
    }
    render() {
        return (
            <React.Fragment>
                <AddMealPage
                inputHandler={this.onChangeInputHandler}
                submitHandler={this.submitFormHandler}
                fileHandler={this.fileChangeHandler}
                selectedValue={this.state.category}
                imageRef={this.uploadedImageRef}
                />
                <Footer name="signup-footer" />
            </React.Fragment>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    addMealAction: (mealData) => dispatch(addMeal(mealData)),
});





export default connect(null, mapDispatchToProps)(AddMealContainer);
