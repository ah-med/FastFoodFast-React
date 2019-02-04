const getErrorMessage = (errorFields) => {
    return errorFields.password || 'firstname and lastname must contain only alphabet'
}

export default getErrorMessage;
