const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/ProductController")

router.get("/", ProductController.showProducts)
router.get("/create", ProductController.createProducts)
router.post("/create", ProductController.createProductsPost)

module.exports = router