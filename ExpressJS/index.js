const express = require("express");
const app = express(); // app is an object

let port = 8080;

app.listen (port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.get("/", (req,res) => {
//     res.send("you contacted root path");
// })
// app.get("/priya", (req,res) => {
//     res.send("you contacted sripriya path");
// })
// app.get("/vikas", (req,res) => {
//     res.send("you contacted vikasT path");
// })

// app.get("*", (req,res) =>{
//     res.send("you contacted unknown path");
// })

app.get("/:username/:id" , (req,res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1> WELCOME TO THE PAGE OF @${username}</h1>`;
    res.send(htmlStr);
    // console.log(req.params);
    // res.send("hello i am root!");
});
app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("please enter search query");
    }
    res.send(`<h1>search results for query :${q}</h1>`);
})


// app.use((req,res) => {
//     console.log("request is received");
//     // res.send("Hello, World!");
//     // res.send({
//     //     name: "John",
//     //     age: 30
//     // });
//     let data = "<h1>Fruits</h1> <ul> <li>apple</li><li>orange</li></ul>";
//     res.send(data);
// });

