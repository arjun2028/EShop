const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");

//@desc all products from db
//@route GET /api/products
//@access Public

router.get("/", (req, res) => {});
//@desc all products from db
//@route GET /api/products
//@access Public
router.get("/:id", (req, res) => {});
module.exports = router;
