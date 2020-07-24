const { user } = require("firebase-functions/lib/providers/auth");

// helper func check if email is valid format
const isEmail = (email) => {
  const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  if (email.match(regEx)) return true;
  else return false;
};

// helper func to check if string is emty or not
const isEmpty = (string) => {
  if (string.trim() == "") return true;
  // trim is for emty space check
  else return false;
};

exports.validateSignupData = (data) => {
  // returns all erorss from input signup
  let errors = {};

  // checking with helper func the email
  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address';
  }

  // check if password is emty
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must match';
  if (isEmpty(data.handle)) errors.handle = 'Must not be empty';

  // check if all fields are clear to procede else errors

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLoginData = (data) => {
  // prepares string for the message
  let errors = {};

  //if empty send an message
  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  //Checks if all fields are filled
  //if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

//checks if its submited empty and doesnt send empty string to react//if empty doesnt add value
exports.reduceUserDetails = (data) => {
  let userDetails = {};
  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) {
    //https://website.com if http is not added its add it in front
    if (data.website.trim().substring(0, 4) !== 'http') {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};
