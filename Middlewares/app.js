 const express = require("express");
 const app = express();
 const ExpressError = require("./ExpressError");

//API token as query string
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "123456") {
    next();
    }
    throw new ExpressError(401, "ACCESS DENIED"); // EXPRESS default error handler will catch this and send a 500 error
};

app.get("/api", checkToken,(req, res) => {
    res.send("data");
})

//  //logger 
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

// app.use("/", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });



 app.get("/", (req, res) => {
    res.send("Hi I am root");
 });

 app.get("/random", (req, res) => {
    res.send("This is a random page!");
 });

// app.get("/err" (req, res) => {
//      abcd = abcd;
// })

app.get("/admin", (req, res) =>{
    throw new ExpressError(403, "Access to admin is forbidden");
});

//Error handler middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
})

// //404
// app.use((req, res) => {
//     res.status(404).send("Not found");
// })
 
 app.listen(8080, () => {
    console.log("Server is running on port 8080");
 })