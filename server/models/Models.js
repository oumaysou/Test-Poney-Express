const Sequelize = require("sequelize");
const db = require("../database/db.js");

const Users = db.sequelize.define("users", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
    // allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull: false
  },
  createdAt: {
    field: "createdAt",
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  socialReason: {
    type: Sequelize.STRING
  },
  accountType: {
    type: Sequelize.STRING
    // allowNull: false
  }
});

const Messages = db.sequelize.define("messages", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  senderId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senderEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recipientEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    field: "createdAt",
    type: Sequelize.DATE
  },
  read_At: {
    field: "readAt",
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  },
  status: {
    type: Sequelize.STRING
  },
  object: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
});

module.exports = { Users, Messages };
