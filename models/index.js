const { sequelize } = require("./connection");
const User = require("./user");
const Board = require("./board");
const Post = require("./post");
const Review = require("./review");

const db = {};

db.sequelize = sequelize;

// model 생성

db.User = User;
db.Board = Board;
db.Post = Post;
db.Review = Review;

// model init
// User.init(sequelize);
//아래 자동 생성해주는거
Object.keys(db).forEach((modelName) => {
  if (db[modelName].init) {
    db[modelName].init(sequelize);
  }
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// association(관계 생성)
// User.associate(db);

module.exports = db;
