const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePartyInput(data) {
    let errors = {};

    data.title= !isEmpty(data.title) ? data.title : "";
    data.address = !isEmpty(data.address) ? data.address : "";

    if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
        errors.title = "Party title must be between 3 and 50 characters";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Text field is required";
    }

    // if (!Validator.isLength(data.address, { min: 6, max: 100 })) {
    //   errors.address = "Address must be greater than 6 letters";
    // }

    // if (Validator.isEmpty(data.address)) {
    //   errors.address = "Address field is required";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
