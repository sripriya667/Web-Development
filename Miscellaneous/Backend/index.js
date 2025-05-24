const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); // middleware to parse URL bodies
app.use(express.json()); // middleware to parse JSON bodies

app.get("/register", (req,res) => {
    let {username, password} = req.query;
    res.send(`Standard GET response, Welcome ${username}`);
})

app.post("/register", (req,res) => {
    let {username, password} = req.body;
    res.send(`Standard POST response, Welcome ${username}`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})