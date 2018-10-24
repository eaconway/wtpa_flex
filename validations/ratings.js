const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePartyInput(data) {
    let errors = {};

    data.rating = !isEmpty(data.rating) ? data.rating : "";

    if (Validator.isEmpty(data.rating)) {
        errors.rating = "Must provide a rating";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
