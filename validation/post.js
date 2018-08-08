const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validatePostInput(data) {
  //Empty object called errors
  let errors = {};

  //If it is null or undefined it will send it in as an empty string, because validator works only w/ strings
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 1 })) {
    errors.text = "Post must have something to display";
  }

  //    Validates Text/Comment
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
