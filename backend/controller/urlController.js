const Url = require("../model/url");
const generateShortCode = require("../utils/generateShortUrl");

// POST /api/shorten
exports.createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortCode = generateShortCode();

  try {
    const newUrl = new Url({ url, shortCode });
    await newUrl.save();
    res.status(201).json(newUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/shorten/:shortCode
exports.getOriginalUrl = async (req, res) => {
  try {
    const urlEntry = await Url.findOne({ shortCode: req.params.shortCode });
    if (!urlEntry) return res.status(404).json({ error: "Short URL not found" });

    urlEntry.accessCount++;
    await urlEntry.save();
    res.status(200).json(urlEntry);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/shorten/:shortCode
exports.updateShortUrl = async (req, res) => {
  const { url } = req.body;
  try {
    const updated = await Url.findOneAndUpdate(
      { shortCode: req.params.shortCode },
      { url, updatedAt: Date.now() },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Short URL not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /api/shorten/:shortCode
exports.deleteShortUrl = async (req, res) => {
  try {
    const deleted = await Url.findOneAndDelete({ shortCode: req.params.shortCode });
    if (!deleted) return res.status(404).json({ error: "Short URL not found" });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/shorten/:shortCode/stats
exports.getStats = async (req, res) => {
  try {
    const urlEntry = await Url.findOne({ shortCode: req.params.shortCode });
    if (!urlEntry) return res.status(404).json({ error: "Short URL not found" });

    res.status(200).json(urlEntry);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
