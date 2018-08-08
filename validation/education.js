const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateEducationInput(data) {
  //Empty object called errors
  let errors = {};

  //If it is null or undefined it will send it in as an empty string, because validator works only w/ strings
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //    Validates title
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  //    Validates degree
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  //    Validates fieldofstudy
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
  }

  //    Validates From
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  //    Validates description
  if (Validator.isEmpty(data.description)) {
    errors.description = "A description is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
