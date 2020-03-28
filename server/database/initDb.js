var fs = require("fs");
var async = require("async");
var csv = require("csv");
var filename1 = __dirname + "/user_dump.csv";
var filename2 = __dirname + "/message_dump.csv";
var Users = require("./../models/Models").Users;
var Messages = require("./../models/Models").Messages;

function insertCsv(filename, model) {
  var input = fs.createReadStream(filename);
  var parser = csv.parse({
    columns: true,
    relax: true
  });

  var inserter = async.cargo(function(tasks, inserterCallback) {
    model.bulkCreate(tasks).then(function() {
      inserterCallback();
    });
  }, 1000);
  parser.on("readable", function() {
    while ((line = parser.read())) {
      inserter.push(line);
    }
  });
  parser.on("end", function(count) {
    inserter.drain = function() {
      doneLoadingCallback();
    };
  });
  input.pipe(parser);
}

async function initDb() {
  await Users.sync({ force: true }).then(() => {
    insertCsv(filename1, Users);
    console.log("Users created");
  });
  await Messages.sync({ force: true }).then(() => {
    insertCsv(filename2, Messages);
    console.log("Messages created");
  });
}

module.exports = initDb;
