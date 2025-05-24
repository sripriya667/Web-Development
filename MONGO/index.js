const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
    });
const User = mongoose.model('User', userSchema);

User.findByIdAndDelete(("682d847a2815381a4eaf4957")).then((res)=> {
    console.log(res);
})

// User.findByIdAndUpdate(("682d847a2815381a4eaf4957"), {age: 28}, {new: true} ) .then((res) => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// User.findById("682d82bd085365ac3cc6a108")
// .then((res) =>
//     console.log(res.name))
//     .catch(err =>
//         console.log(err));


// User.insertMany([
//     {name: 'John', email: 'john@gmail.com', age: 25},
//     {name: 'Jane', email: 'jane@gmail.com', age: 30},
//     {name: 'Bob', email: 'bob@gmail.com', age: 35}
// ]).then((res) => {
//     console.log(res);
// })

// const user2 = new User({
//     name: ' Doe',
//     email: 'doe@example.com',
//     age: 30,
// });
// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// });