import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";
const app = express();
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

async function insertRandomUsers(connection) {
  let getRandomUser = () => {
    return [
      Math.floor(Math.random() * 1000000), // generate random integer id
      faker.internet.username(), // corrected method name for faker v9.1.0+
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

  // Inserting New Data
  let q = "INSERT INTO user (id, name, email, password) VALUES ?";

  let data = [];
  for (let i = 1; i < 100; i++) {
    data.push(getRandomUser());
  }

  try {
    const [rows, fields] = await connection.query(q, [data]);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'priya.667'
  });

  await insertRandomUsers(connection);
//home route
  app.get("/", async (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;
    try {
      const [rows, fields] = await connection.query(q);
      let count = rows[0].count; // ✅ correct key
      res.render("home.ejs", { count });
    } catch (err) {
      console.log(err);
      res.status(500).send("Error querying user count");
    }
  });

//show route
app.get("/user", async (req, res) => {
  let q = `SELECT * FROM user`;
  try {
      const [rows, fields] = await connection.query(q);
      res.render("showusers.ejs", {rows});
    } catch (err) {
      console.log(err);
      res.status(500).send("Error querying user count");
    }
});

  app.listen(3000, () => {
    console.log("server is listening on port 3000");
  });
}

main();
