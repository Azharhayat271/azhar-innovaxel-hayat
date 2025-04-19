const express = require("express");
const router = express.Router();
const {
  createShortUrl,
  getOriginalUrl,
  updateShortUrl,
  deleteShortUrl,
  getStats
} = require("../controller/urlController");

router.post("/", createShortUrl);
router.get("/:shortCode", getOriginalUrl);
router.put("/:shortCode", updateShortUrl);
router.delete("/:shortCode", deleteShortUrl);
router.get("/:shortCode/stats", getStats);

module.exports = router;
