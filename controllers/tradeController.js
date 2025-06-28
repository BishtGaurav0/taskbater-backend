const Trade = require("../models/Trade");

exports.createTrade = async (req, res) => {
  try {
    const { task, requester, provider } = req.body;
    const trade = await Trade.create({ task, requester, provider });
    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({ error: "Failed to create trade" });
  }
};

exports.updateTradeStatus = async (req, res) => {
  try {
    const trade = await Trade.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(trade);
  } catch (err) {
    res.status(500).json({ error: "Failed to update trade status" });
  }
};

exports.getUserTrades = async (req, res) => {
  try {
    const trades = await Trade.find({
      $or: [{ requester: req.params.userId }, { provider: req.params.userId }]
    }).populate("task requester provider");
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trades" });
  }
};
