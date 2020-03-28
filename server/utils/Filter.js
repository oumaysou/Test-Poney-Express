const User = require("../models/Models").Users;
const Messages = require("../models/Models").Messages;
var _ = require("lodash");

const Filter1 = async (res, obj) => {
  try {
    const users = [];
    const tab = [];
    if (obj.length !== 0) {
      for (let i in obj) {
        tab.push(obj[i]);
      }
      i = -1;
      while (++i < tab.length) {
        const user = await User.findOne({
          where: {
            email: tab[i].recipientEmail
          }
        });
        const concatInfo = _.concat(tab[i], user);
        users.push(concatInfo);
      }
      res.json(users);
    }
  } catch (e) {
    console.log("Error Filter1 => " + e);
  }
};

const Filter2 = async (res, obj) => {
  try {
    const users = [];
    const tab = [];
    if (obj.length !== 0) {
      for (let i in obj) {
        tab.push(obj[i]);
      }
      i = -1;
      while (++i < tab.length) {
        const user = await User.findOne({
          where: {
            id: tab[i].senderId
          }
        });
        const concatInfo = _.concat(tab[i], user);
        users.push(concatInfo);
      }
      res.json(users);
    }
  } catch (e) {
    console.log("Error Filter2 => " + e);
  }
};

module.exports = { Filter1, Filter2 };
