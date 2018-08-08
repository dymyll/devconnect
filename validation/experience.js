const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateExperienceInput(data) {
  //Empty object called errors
  let errors = {};

  //If it is null or undefined it will send it in as an empty string, because validator works only w/ strings
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //    Validates title
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  //    Validates company
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  //    Validates From
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
