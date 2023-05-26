const express = require("express");

const router = express.Router();
const logger = require("../lib/logger");
const reviewService = require("../service/reviewService");
const { isLoggedIn } = require("../lib/middleware");

// 등록
router.post("/", isLoggedIn, async (req, res) => {
  const loginUserId = res.get("userId") || null;
  try {
    const params = {
      postId: req.body.postId,
      userId: req.body.userId || loginUserId,
      score: req.body.score,
    };
    logger.info(`(post.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.userId || !params.postId || !params.score) {
      const err = new Error("Not allowed null (userId, postId,score )");
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await reviewService.reg(params);
    logger.info(`(review.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
