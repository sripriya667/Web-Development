const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js"); 
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express .static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res) => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat( {
    from:"vijju",
    to:"priya",
    msg:"hello priya",
    created_at: new Date()
    });

chat1.save()
.then((res) => {
    console.log(res);
})

//Index route
app.get("/chats", async (req, res) =>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})
//New route
app.get("/chats/new", (req, res) =>{
    res.render("new.ejs");
});
//Create route
app.post("/chats", (req, res) =>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
        });
        newChat.save()
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) =>
            {
                console.log(err);
                });
                res.redirect("/chats");
        
});

//Edit user
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//Update route
app.put("/chats/:id", async (req, res) =>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg},
        {runValidators : true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
    });
//Destroy route
app.delete("/chats/:id", async (req, res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    });

app.get("/", (req, res) => {
    res.send("root is working");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})