const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
    express.urlencoded({
        extended: false
    })
);

// Custom Cost changing handlebar
hbs.registerHelper("stringToDollars", function(dollarsInString) {
    return parseFloat(dollarsInString/100).toFixed(2)
  });

// routes
const productsRoutes = require("./routes/products.js")

async function main() {
    app.use("/products", productsRoutes)
    app.get("/", (req, res) => {
        res.render("index")
    })

}

main();

app.listen(3000, () => {
    console.log("Server has started");
});