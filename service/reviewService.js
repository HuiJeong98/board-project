const logger = require("../lib/logger");
const reviewDao = require("../dao/reviewDao");

const service = {
  // department 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await reviewDao.insert(params);
      logger.debug(`(reviewService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(reviewService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
};

module.exports = service;
