//jshint esversion:6
const express = require("express")
const bodyparser = require("body-parser")
const ejs = require("ejs");
const { log } = require("console");

const app = express()

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
    extended:true
}))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/register", (req, res) => {
    res.render("register")
})
















app.listen(3000, function () {
    console.log("server Started on port 3000.");
});