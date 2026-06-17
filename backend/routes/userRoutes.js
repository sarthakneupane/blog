const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");


const addBlogController = require("../controllers/addBlogController");
const homePageController = require("../controllers/homePageController");

router.get("/get-categories", addBlogController.getCategories);

router.post("/add-blog", upload.single("image"), addBlogController.addBlog);

router.get("/get-blogs", homePageController.getBlogs);

module.exports = router; 