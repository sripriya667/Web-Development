//templating using EJS
const express = require("express");
const app = express();
const path = require("path");

const port = 4000;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs"); //templates
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs"); //by default it will look for a file in views folder
});

app.get("/hello", (req, res) => {
    res.send("hello"); 
});

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num}); // passing data to ejs template as objects
})

app.get("/ig/:username", (req, res) => {
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("instagram.ejs", {data});
    } else{
        res.render("./error.ejs");
    }

    
    
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});