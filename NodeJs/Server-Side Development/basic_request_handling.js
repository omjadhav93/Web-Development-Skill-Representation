const express = require("express");
const session = require("express-session")
const path = require("path");
const app = express();
const pug = require('pug');

// Setup PORT value and extract Session Secret Code
let PORT = process.env.PORT || 5500;
let SESSION_SECRET = process.env.SESSION_SECRET

// View Engine Setup
app.set("view engine", "pug");
app.set("views", "./views");

app.use('/static', express.static('static'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.get("/", (req, res) => {
  res.render("index.pug");
}

// Server Start
app.listen(PORT, () => {
    console.log(`The App Start On Port : ${PORT}`);
})
