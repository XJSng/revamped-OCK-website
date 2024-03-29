const express = require("express")
const router = express.Router()
const {Product} = require("../models")
const { createProductForm, bootstrapField } = require("../forms")

router.get("/", async (req, res)=> {
    let products = await Product.collection().fetch()
    res.render("products/index", {
        products: products.toJSON()
    })
})

router.get("/create", async (req, res)=> {
    const productForm = createProductForm();
    res.render("products/create", {
    form: productForm.toHTML(bootstrapField)
})
})

module.exports = router
