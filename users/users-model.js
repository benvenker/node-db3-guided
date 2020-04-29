const db = require("../data/db-config");

function find() {
  return db("users");
}

function findById(userId) {
  return db("users").where({ id: userId }).first();
}

module.exports = {
  find,
  findById,
};
