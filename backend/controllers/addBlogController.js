const pool = require("../db");


exports.getCategories = async (req, res) => {
  try {
    const categories = await pool.query("SELECT * FROM categories");
    res.json(categories.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};