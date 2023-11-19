import express from "express";
import router from "./../routes/index.js";
import url from "url";
import bodyParser from "body-parser";
import db from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = url.fileURLToPath(new URL("..", import.meta.url));

app.set("views", __dirname + "views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }