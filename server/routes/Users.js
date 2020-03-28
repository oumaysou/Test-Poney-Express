const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const mailerTo = require("../utils/mailer");
const User = require("../models/Models").Users;
const Messages = require("../models/Models").Messages;
const msgError = require("../utils/Checker");
const { Filter1, Filter2 } = require("../utils/Filter");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", async (req, res) => {
  const today = new Date();
  const errors = await msgError(req);
  if (errors.length) return res.json({ error: errors });
  const userData = {
    id: uuidv4(),
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    socialReason: req.body.raison_social,
    accountType: req.body.account_type,
    created: today
  };
  await User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        mailerTo(userData.email, userData.firstName, userData.password);
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          userData.password = hash;
          await User.create(userData)
            .then(user => {
              res.json({ error: "", status: "Registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async user => {
      if (user) {
        const match = await bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (match) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: "Password is not correct" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.json({ error: err });
    });
});

users.get("/getMessages/:email", async (req, res) => {
  const email = req.params.email;
  await Messages.findAll({
    where: {
      recipientEmail: email
    }
  })
    .then(async response => {
      if (response) {
        Filter2(res, response);
      } else {
        res.send("No Mail received!");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.get("/getMessagesSent/:email", async (req, res) => {
  const email = req.params.email;
  await Messages.findAll({
    where: {
      senderEmail: email
    }
  })
    .then(response => {
      if (response) {
        Filter1(res, response);
      } else {
        res.send("No Mail Sent!");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = users;
