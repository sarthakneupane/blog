const express = require("express");
const router = express.Router();

const addBlogController = require("../controllers/addBlogController");

router.get("/get-categories", addBlogController.getCategories);

module.exports = router; 