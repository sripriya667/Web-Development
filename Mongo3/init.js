const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then((res) => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "deepak",
        to: "sachin",
        msg: "Hello",
        created_at: new Date(),
    },
      {
        from: "tony",
        to: "ramu",
        msg: "Hello",
        created_at: new Date(),
    },
      {
        from: "vamshi",
        to: "nikhil",
        msg: "Hello",
        created_at: new Date(),
    },
      {
        from: "radha",
        to: "bhagya",
        msg: "Hello",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);