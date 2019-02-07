import axios from 'axios';
import toastr from 'toastr';
import { toastrOptions } from '../actions/constants';



export const uploadImageCloudinary = async (value) => {
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'zeooiv7x');
    formData.append('file', value);
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/ah-med/image/upload',
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    toastr.error('Cloudinary upload failed');
    toastr.options = toastrOptions;
  }
};

export default uploadImageCloudinary;
