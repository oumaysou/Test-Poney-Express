const msgError = async req => {
  let errors = [];
  const {
    first_name,
    last_name,
    email,
    password,
    raison_social,
    account_type
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !raison_social ||
    !account_type
  ) {
    let err = "Please Enter all informations";
    errors.push(err);
  }
  let errName = checkName(first_name, last_name);
  if (errName != "") errors.push(errName);
  let errExtra = checkExtra(raison_social, account_type);
  if (errExtra != "") errors.push(errExtra);
  let errPassword = checkPassword(password);
  if (errPassword != "") errors.push(errPassword);
  let errEmail = checkEmail(email);
  if (errEmail != "") errors.push(errEmail);
  return errors;
};

const checkName = (first_name, last_name) => {
  let error = "";

  if (!first_name.match(/^[-a-z' ]+$/i) || !last_name.match(/^[-a-z' ]+$/i))
    error = "Your first name of last name is not valid";
  else if (first_name.length > 10 || last_name.length > 10)
    error = "Your first name of last name is too long";
  return error;
};

const checkExtra = (raison_social, account_type) => {
  let error = "";
  if (
    !raison_social.match(/^[-a-z' ]+$/i) ||
    !account_type.match(/^[-a-z' ]+$/i)
  )
    error = "Your Social reason or Account type is not valid";
  else if (raison_social.length > 10 || account_type.length > 10)
    error = "Your Social reason or Account type is too long";
  return error;
};

const checkPassword = password => {
  let error = "";

  if (!password.match(/^[a-z0-9]{8,255}$/i))
    error = "Your password must have 8 alphanumeric characters minimum";
  return error;
};

const checkEmail = email => {
  let error = "";
  if (!email.match(/^[-a-z0-9_.]+@[-a-z0-9_]+\.[a-z]{2,3}$/))
    error = "Your email is not valid";
  return error;
};

module.exports = msgError;
