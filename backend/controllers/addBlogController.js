const pool = require("../db");


exports.getCategories = async (req, res) => {
  try {
    const categories = await pool.query("SELECT * FROM categories");
    res.json(categories.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addBlog = async (req, res) => {
  try {
    const { title, content, category_id } = req.body;

    const image = req.file ? req.file.filename : null;

    const result = await pool.query(
      `INSERT INTO blogs (user_id, title, content, image, status)
       VALUES ($1, $2, $3, $4, 'published')
       RETURNING id`,
      [1, title, content, image]
    );

    const blogId = result.rows[0].id;

    await pool.query(
      `INSERT INTO blog_categories (blog_id, category_id)
       VALUES ($1, $2)`,
      [blogId, category_id]
    );

    res.json({ success: true, blogId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
