import axios from "axios";

export const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      raison_social: newUser.raison_social,
      account_type: newUser.account_type
    })
    .then(response => {
      return response.data;
    });
};

export const login = user => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (!response.data.error) {
        localStorage.setItem("usertoken", response.data);
        return response.data;
      } else return response.data;
    })
    .catch(err => {
      return err.response;
    });
};

export const getMessages = async email => {
  return await axios
    .get(`users/getMessages/${email}`)
    .then(response => {
      if (response.data) {
        return response.data;
      }
    })
    .catch(err => {
      return err.response;
    });
};

export const getMessagesSent = async email => {
  return await axios
    .get(`users/getMessagesSent/${email}`)
    .then(response => {
      if (response.data) {
        return response.data;
      }
    })
    .catch(err => {
      return err.response;
    });
};
