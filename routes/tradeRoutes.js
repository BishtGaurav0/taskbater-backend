const express = require("express");
const router = express.Router();
const {
  createTrade,
  updateTradeStatus,
  getUserTrades
} = require("../controllers/tradeController");

router.post("/", createTrade);
router.put("/:id", updateTradeStatus);
router.get("/user/:userId", getUserTrades);

module.exports = router;
