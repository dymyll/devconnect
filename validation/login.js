const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateLoginInput(data) {
  //Empty object called errors
  let errors = {};

  //If it is null or undefined it will send it in as an empty string, because validator works only w/ strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //    Validates Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //    Validates Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
