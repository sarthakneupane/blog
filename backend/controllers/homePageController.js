const pool = require("../db");

exports.getBlogs = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        b.id AS blog_id,
        b.title,
        b.content,
        b.image,
        b.created_at,
        c.id AS category_id,
        c.name AS category_name
      FROM blogs b
      LEFT JOIN blog_categories bc ON b.id = bc.blog_id
      LEFT JOIN categories c ON c.id = bc.category_id
      ORDER BY b.id DESC
    `);

    const rows = result.rows;

    const blogsMap = {};

    rows.forEach((row) => {
      if (!blogsMap[row.blog_id]) {
        blogsMap[row.blog_id] = {
          id: row.blog_id,
          title: row.title,
          content: row.content,
          image: row.image,
          created_at: row.created_at,
          categories: [],
        };
      }

      if (row.category_id) {
        blogsMap[row.blog_id].categories.push({
          id: row.category_id,
          name: row.category_name,
        });
      }
    });

    const blogs = Object.values(blogsMap);

    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};