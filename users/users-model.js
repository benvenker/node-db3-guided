const db = require("../data/db-config");

function find() {
  return db("users");
}

function findById(userId) {
  return db("users").where({ id: userId }).first();
}

function findPosts(id) {
  return db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .select("p.id", "u.username", "p.contents")
    .where({ user_id: id });
}

function add(userData) {
  return db("users").insert(userData);
}

module.exports = {
  add,
  find,
  findById,
  findPosts,
};
