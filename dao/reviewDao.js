const { Op } = require("sequelize");
const { Post, User, Board, Review } = require("../models/index");

const dao = {
  // 별점 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Review.create(params)
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
