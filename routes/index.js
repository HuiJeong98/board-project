const express = require("express");
const logger = require("../lib/logger");
const userRouter = require("./user");
const authRouter = require("./auth");
const boardRouter = require("./board");
const postRouter = require("./post");
const reviewRouter = require("./review");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

// logTest
router.get("/log-test", (req, res, next) => {
  logger.error("This message is error");
  logger.warn("This message is warn");
  logger.info("This message is info");
  logger.verbose("This message is verbose");
  logger.debug("This message is debug");
  logger.silly("This message is silly");

  res.send("log test");
});

//url 주소 설정하는 부분
router.use("/users", userRouter);
router.use("/auths", authRouter);
router.use("/boards", boardRouter);
router.use("/posts", postRouter);
router.use("/reviews", reviewRouter);

module.exports = router;
